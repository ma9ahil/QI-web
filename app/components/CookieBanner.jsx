"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// --- CONFIGURATION ---
// TODO: When you get your Google Analytics ID, replace 'G-XXXXXXXXXX' below.
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; 

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [preferences, setPreferences] = useState({ analytics: false, marketing: false });

  // Helper: Inject Google Analytics Scripts
  const loadGoogleAnalytics = () => {
    if (typeof window === 'undefined') return;
    // Prevent loading twice
    if (document.getElementById('ga-script')) return; 

    // 1. Load the main GTAG script
    const script = document.createElement('script');
    script.id = 'ga-script';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // 2. Initialize the GTAG configuration
    const inlineScript = document.createElement('script');
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}', {
        page_path: window.location.pathname,
      });
    `;
    document.head.appendChild(inlineScript);

    console.log(`[Analytics] Google Analytics loaded with ID: ${GA_MEASUREMENT_ID}`);

    if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
      console.log('[Analytics] GA ID not configured.');
      return;
    }
  };

  useEffect(() => {
    // Check local storage on mount
    const stored = localStorage.getItem('cookieConsent');
    if (!stored) {
      setShowBanner(true);
    } else {
      const consent = JSON.parse(stored);
      // If they previously consented, load analytics immediately
      if (consent.analytics) {
        setPreferences(consent); // Update state to match saved prefs
        loadGoogleAnalytics();
      }
    }
  }, []);

  const savePreferences = (prefs) => {
    localStorage.setItem('cookieConsent', JSON.stringify(prefs));
    setShowBanner(false);
    setShowModal(false);
    
    // If they just consented, load analytics now
    if (prefs.analytics) {
      loadGoogleAnalytics();
    }
  };

  const handleAcceptAll = () => savePreferences({ analytics: true, marketing: true });
  const handleRejectAll = () => savePreferences({ analytics: false, marketing: false });
  
  if (!showBanner && !showModal) return null;

  return (
    <>
      {/* --- BANNER --- */}
      {showBanner && !showModal && (
        <div className="fixed inset-x-0 bottom-0 z-[100] p-4">
          <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-neutral-900/95 backdrop-blur-md p-6 shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
              <p className="text-sm text-neutral-200">
                We use essential cookies to make this site work, and optional analytics to improve it.
              </p>
              <div className="flex flex-wrap gap-2 shrink-0">
                <button onClick={handleRejectAll} className="rounded-xl border border-white/15 px-4 py-2 text-sm text-white hover:bg-white/5 transition">
                  Reject all
                </button>
                <button onClick={handleAcceptAll} className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500 transition shadow-lg shadow-blue-500/20">
                  Accept all
                </button>
                <button onClick={() => setShowModal(true)} className="rounded-xl border border-white/15 px-4 py-2 text-sm text-white hover:bg-white/5 transition">
                  Preferences
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- PREFERENCES MODAL --- */}
      {showModal && (
        <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-neutral-900 p-6 shadow-2xl">
            <header className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white">Cookie Preferences</h2>
              <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-white">✕</button>
            </header>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 rounded-xl border border-white/5 bg-white/5">
                <input type="checkbox" checked disabled className="mt-1 accent-blue-600" />
                <div>
                  <strong className="text-white block">Essential</strong>
                  <span className="text-sm text-slate-400">Security, load-balancing, basic functionality. Always on.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl border border-white/10">
                <input 
                  type="checkbox" 
                  className="mt-1 accent-blue-600" 
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({...preferences, analytics: e.target.checked})}
                />
                <div>
                  <strong className="text-white block">Analytics</strong>
                  <span className="text-sm text-slate-400">Helps us understand usage to improve the site.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl border border-white/10">
                <input 
                  type="checkbox" 
                  className="mt-1 accent-blue-600"
                  checked={preferences.marketing}
                  onChange={(e) => setPreferences({...preferences, marketing: e.target.checked})}
                />
                <div>
                  <strong className="text-white block">Marketing</strong>
                  <span className="text-sm text-slate-400">Future remarketing pixels or ads (currently disabled).</span>
                </div>
              </div>
            </div>

            <footer className="mt-8 flex justify-end gap-2">
              <button onClick={() => setShowModal(false)} className="px-4 py-2 rounded-xl text-sm text-slate-300 hover:text-white">Cancel</button>
              <button onClick={() => savePreferences(preferences)} className="px-6 py-2 rounded-xl bg-blue-600 text-white text-sm font-bold hover:bg-blue-500">
                Save Choices
              </button>
            </footer>
          </div>
        </div>
      )}
    </>
  );
}
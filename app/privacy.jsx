"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0c111c] text-neutral-100 font-sans selection:bg-blue-600/40 pb-20">
      <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 hover:underline mb-8">
          <ArrowLeft size={16} /> Back to site
        </Link>
        
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Privacy Policy (UK)</h1>
        <p className="text-neutral-400 text-sm mb-8">Effective date: 12 February 2026</p>

        <div className="space-y-10 text-[0.95rem] leading-7 text-neutral-300">
          <section>
            <h2 className="font-semibold text-xl text-white mb-3">Who we are</h2>
            <p>Quantum Ignitions Ltd (“we”, “us”) is the data controller for this website and our services.</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Registered in England & Wales: [Company number]</li>
              <li>Registered office: [Registered address, London, UK]</li>
              <li>Data protection contact: <a href="mailto:privacy@quantumignitions.com" className="text-blue-400 hover:underline">privacy@quantumignitions.com</a></li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-xl text-white mb-3">Personal data we collect</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Identity & contact data</strong> (name, email, company, role)</li>
              <li><strong>Project & enquiry data</strong> (details you share in forms, calls, emails)</li>
              <li><strong>Usage & device data</strong> via cookies/analytics</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-xl text-white mb-3">How we use your data</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Responding to enquiries & proposals</li>
              <li>Delivering our services (contractual)</li>
              <li>Analytics (consent-based)</li>
              <li>Legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-xl text-white mb-3">Cookies & Analytics</h2>
            <p>Essential cookies keep the site working. Optional analytics (e.g., Google Analytics 4) run only if you consent via the cookie banner.</p>
          </section>

          <section>
            <h2 className="font-semibold text-xl text-white mb-3">Your Rights</h2>
            <p>You have rights to access, correct, delete, and restrict your data. To exercise these rights, email us at privacy@quantumignitions.com.</p>
          </section>
        </div>

        <footer className="mt-16 pt-8 border-t border-white/10 text-sm text-neutral-500">
          <p>© 2026 Quantum Ignitions Ltd</p>
        </footer>
      </main>
    </div>
  );
}
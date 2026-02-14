"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-[#0c111c] text-neutral-100 font-sans selection:bg-blue-600/40 pb-20">
      <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 hover:underline mb-8">
          <ArrowLeft size={16} /> Back to site
        </Link>
        
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Terms & Conditions</h1>
        <p className="text-neutral-400 text-sm mb-8">Governing law: England & Wales. Last updated: 12 February 2026.</p>

        <div className="space-y-10 text-[0.95rem] leading-7 text-neutral-300">
          <section>
            <h2 className="font-semibold text-xl text-white mb-3">1. Definitions</h2>
            <p><strong>“We/Us”</strong> means Quantum Ignitions Ltd. <strong>“You/Client”</strong> means the entity purchasing the Services.</p>
          </section>

          <section>
            <h2 className="font-semibold text-xl text-white mb-3">2. Scope of Services</h2>
            <p>We will provide the Services described in the applicable Order or Statement of Work. In conflict, the specific Order prevails.</p>
          </section>

          <section>
            <h2 className="font-semibold text-xl text-white mb-3">3. Intellectual Property</h2>
            <p>On full payment, we assign to you all IP in bespoke Deliverables. Our pre-existing IP remains ours, with a license granted to you for use within the Deliverables.</p>
          </section>

          <section>
            <h2 className="font-semibold text-xl text-white mb-3">4. Fees & Payment</h2>
            <p>Invoices are due within 14 days. UK VAT applies where relevant.</p>
          </section>

          <section>
            <h2 className="font-semibold text-xl text-white mb-3">5. Liability</h2>
            <p>Our liability is limited to the total fees paid in the 12 months preceding the claim, except where liability cannot be excluded by law (e.g., fraud, death/personal injury due to negligence).</p>
          </section>
          
          <section>
             <h2 className="font-semibold text-xl text-white mb-3">6. Governing Law</h2>
             <p>These terms are governed by the laws of England & Wales.</p>
          </section>
        </div>

        <footer className="mt-16 pt-8 border-t border-white/10 text-sm text-neutral-500">
          <p>© 2026 Quantum Ignitions Ltd</p>
        </footer>
      </main>
    </div>
  );
}
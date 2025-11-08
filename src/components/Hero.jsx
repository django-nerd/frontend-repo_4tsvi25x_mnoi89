import React from 'react';
import { Rocket, ShieldCheck, Layers, FileCheck2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Material Inward Management, simplified.
            </h2>
            <p className="mt-3 text-gray-600">
              Securely capture, track, and report materials across departments with live totals,
              receipt uploads, and printable reports.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="/add-material" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">
                <FileCheck2 className="h-4 w-4" /> Add Material
              </a>
              <a href="/dashboard" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
                <Layers className="h-4 w-4" /> View Dashboard
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Feature icon={Rocket} title="Fast" desc="Quick forms with live totals" />
            <Feature icon={ShieldCheck} title="Secure" desc="Validation and best practices" />
            <Feature icon={Layers} title="Organized" desc="Departments & categories" />
            <Feature icon={FileCheck2} title="Receipts" desc="Upload and manage files" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="p-4 rounded-lg border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center gap-2">
        <Icon className="h-5 w-5 text-blue-600" />
        <h3 className="font-semibold text-gray-900 text-sm">{title}</h3>
      </div>
      <p className="text-xs text-gray-600 mt-1">{desc}</p>
    </div>
  );
}

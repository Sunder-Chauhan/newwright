import React from 'react';
import { Phone, Mail, Facebook, MessageCircle } from 'lucide-react';

export const Contact = () => (
  <section className="py-20 bg-slate-900 text-white">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-8">Ready to Start Your Project?</h2>
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="text-left space-y-6">
          <h3 className="text-2xl font-bold mb-4">Contact Details</h3>
          <p className="flex items-center gap-3 text-xl"><Phone className="text-blue-400" /> +44 7812 196147</p>
          <p className="flex items-center gap-3 text-xl"><Mail className="text-blue-400" /> wrightwindowsdoors@gmail.com</p>
          <p className="flex items-center gap-3 text-xl"><Facebook className="text-blue-400" /> Wright Windows & Doors</p>
        </div>
        <div className="text-left">
          <h3 className="text-2xl font-bold mb-4">Serving South Yorkshire</h3>
          <div className="flex flex-wrap gap-3">
            {["Doncaster", "Wakefield", "Barnsley", "Rotherham"].map(area => (
              <span key={area} className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-full font-semibold">{area}</span>
            ))}
          </div>
          <a href="https://wa.me/447812196147" className="mt-8 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold transition-colors">
            <MessageCircle /> Message on WhatsApp
          </a>
        </div>
      </div>
    </div>
  </section>
);

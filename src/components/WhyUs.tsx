import React from 'react';
import { Award, MapPin, ShieldCheck, ThumbsUp } from 'lucide-react';

export const WhyUs = () => {
  const benefits = [
    { icon: <Award className="w-8 h-8 text-blue-600" />, title: "25+ Years Experience", desc: "Serving South Yorkshire with established local craftsmanship since 1998." },
    { icon: <MapPin className="w-8 h-8 text-blue-600" />, title: "Local Experts", desc: "Based in the heart of South Yorkshire. We know the local styles and weather requirements." },
    { icon: <ShieldCheck className="w-8 h-8 text-blue-600" />, title: "High-Spec Quality", desc: "We only use premium UPVc and Aluminum systems for maximum security and energy efficiency." },
    { icon: <ThumbsUp className="w-8 h-8 text-blue-600" />, title: "No-Pressure Advice", desc: "Direct contact with Rob. No pushy salesmen, just honest professional advice." }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-12">Why Choose Wright Windows?</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 flex justify-center">{b.icon}</div>
              <h4 className="text-xl font-bold mb-2">{b.title}</h4>
              <p className="text-slate-600 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
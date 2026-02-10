import React from 'react';
import { Facebook, ExternalLink } from 'lucide-react';

export const Gallery = () => {
  // Bhai, put your 6 best photos in the 'public' folder and name them exactly like this:
  const projects = [
    {
      id: 1,
      image: "/gallery1.jpg", 
      title: "Bespoke Aluminum Bifolds",
      category: "Doncaster • Residential"
    },
    {
      id: 2,
      image: "/gallery2.jpg",
      title: "UPVc Flush Sash Windows",
      category: "Barnsley • Renovation"
    },
    {
      id: 3,
      image: "/gallery3.jpg",
      title: "Composite Door Installation",
      category: "Rotherham • Front Entrance"
    },
    {
      id: 4,
      image: "/gallery4.jpg",
      title: "Conservatory Roof Upgrade",
      category: "Wakefield • Extension"
    },
    {
      id: 5,
      image: "/gallery5.jpg",
      title: "Heritage Style Glazing",
      category: "South Yorkshire • Period Home"
    },
    {
      id: 6,
      image: "/gallery6.jpg",
      title: "Modern Grey Casements",
      category: "Doncaster • New Build"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Recent Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Take a look at some of our recent transformations across South Yorkshire. 
            From modern Aluminum systems to classic UPVc upgrades.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-xl shadow-lg bg-white h-80 cursor-pointer">
              
              {/* Image with Zoom Effect */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-blue-400 text-sm font-bold uppercase tracking-wider mb-2">
                  {project.category}

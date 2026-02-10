import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { WhyUs } from './components/WhyUs';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Gallery } from './components/Gallery'; // Ensure you created this file!

function App() {
  const [activePage, setActivePage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const phoneNumber = '+447812196147';
  const whatsappNumber = '447812196147';

  // Navigation Helper
  const navigate = (page: string) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* --- HEADER --- */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50 border-b border-slate-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="cursor-pointer" onClick={() => navigate('home')}>
            <img src="/header-logo.png" alt="Wright Windows" className="h-16 w-auto block" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center">
            {['Home', 'Services', 'Gallery', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => navigate(item.toLowerCase())}
                className={`text-sm font-bold uppercase tracking-wide hover:text-blue-600 transition-colors ${activePage === item.toLowerCase() ? 'text-blue-600' : 'text-slate-600'}`}
              >
                {item}
              </button>
            ))}
            <a href={`tel:${phoneNumber}`} className="flex items-center gap-2 border-2 border-slate-900 px-5 py-2 rounded font-bold hover:bg-slate-900 hover:text-white transition-all">
              <Phone className="w-4 h-4" /> Call Rob
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-slate-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full left-0 top-full p-6 shadow-xl flex flex-col gap-4">
            {['Home', 'Services', 'Gallery', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => navigate(item.toLowerCase())}
                className="text-left text-lg font-bold text-slate-800 py-2 border-b border-slate-50"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="pt-24">
        
        {/* HOME PAGE VIEW */}
        {activePage === 'home' && (
          <>
            {/* Hero Section */}
            <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-slate-900">
                <img 
                  src="https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=1920" 
                  className="w-full h-full object-cover opacity-40" 
                  alt="Modern Glazing"
                />
              </div>
              <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <img src="/header-logo.png" className="w-64 mx-auto mb-8 brightness-0 invert" alt="Wright Windows White Logo" />
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                  High-Specification<br /><span className="text-blue-400">Glazing Specialists</span>
                </h1>
                <p className="text-xl text-blue-100 mb-10 font-light max-w-2xl mx-auto">
                  Premium UPVc, Aluminum, and Timber solutions for homes across South Yorkshire since 1998.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href={`tel:${phoneNumber}`} className="bg-white text-slate-900 px-8 py-4 font-bold rounded hover:bg-blue-50 transition shadow-lg flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" /> Call Rob Now
                  </a>
                  <a href={`https://wa.me/${whatsappNumber}`} className="bg-green-500 text-white px-8 py-4 font-bold rounded hover:bg-green-600 transition shadow-lg flex items-center justify-center gap-2">
                    <MessageCircle className="w-5 h-5" /> WhatsApp Quote
                  </a>
                </div>
              </div>
            </section>

            {/* Components on Home Page */}
            <WhyUs />
            <Services />
            <div className="bg-slate-50 py-12 text-center">
              <h3 className="text-2xl font-bold mb-6">See Our Recent Work</h3>
              <button onClick={() => navigate('gallery')} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition">
                View Full Gallery
              </button>
            </div>
            <Contact />
          </>
        )}

        {/* OTHER PAGES */}
        {activePage === 'services' && <Services />}
        {activePage === 'gallery' && <Gallery />}
        {activePage === 'contact' && <Contact />}

      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div>
            <img src="/footer-logo.png" alt="Wright Windows" className="w-64 mb-6 brightness-0 invert" />
            <p className="text-slate-400 leading-relaxed">
              Established local craftsmanship you can trust. Serving Doncaster, Barnsley, and Rotherham with pride since 1998.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-slate-700 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'Gallery', 'Contact'].map(link => (
                <li key={link}>
                  <button onClick={() => navigate(link.toLowerCase())} className="text-slate-400 hover:text-white transition">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-slate-700 pb-2 inline-block">Contact Us</h4>
            <div className="space-y-4 text-slate-300">
              <p className="flex items-center gap-3"><Phone className="w-5 h-5 text-blue-400" /> +44 7812 196147</p>
              <a href="https://www.facebook.com/wrightwindowsdoors" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white">
                <span className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center text-xs font-bold">f</span> Follow on Facebook
              </a>
              <p className="text-sm text-slate-500 mt-4">
                © 2026 Wright Windows & Doors.<br />Designed by <span className="text-blue-400 font-bold">WebOrigin</span>
              </p>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
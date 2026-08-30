import React from 'react';
import { Mail, MapPin, ExternalLink, Handshake, Users, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-carbon-950 relative border-t border-carbon-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono text-brand-brightRed uppercase tracking-widest font-semibold block mb-2">
                Get In Touch
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white uppercase tracking-tight">
                LET'S BUILD THE FUTURE TOGETHER
              </h2>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              Whether you are a student eager to join our workshop, a sponsor looking to partner with Romania's #1 FS EV team, or a motorsport enthusiast, we would love to hear from you.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 text-gray-300 text-sm">
                <MapPin className="w-5 h-5 text-brand-brightRed shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-medium">Headquarters & Workshop:</strong>
                  <span>Simtex Building, Room 03, Cluj-Napoca, Romania</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-gray-300 text-sm">
                <Mail className="w-5 h-5 text-brand-brightRed shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-medium">Email:</strong>
                  <a href="mailto:arttu.contact@gmail.com" className="text-brand-brightRed hover:underline font-mono">
                    arttu.contact@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-4">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-widest block mb-3">
                Follow the Action
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/arttuclujnapoca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-carbon-900 border border-carbon-800 hover:border-brand-red text-gray-300 hover:text-white transition"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/arttu-formulastudent/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-carbon-900 border border-carbon-800 hover:border-brand-red text-gray-300 hover:text-white transition"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/ARTteamClujNapoca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-carbon-900 border border-carbon-800 hover:border-brand-red text-gray-300 hover:text-white transition"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Inquiry Hub */}
          <div className="lg:col-span-7 bg-carbon-900 p-6 sm:p-8 rounded-2xl border border-carbon-800 shadow-xl space-y-4">
            <h3 className="font-display font-bold text-xl text-white mb-2">
              Direct Collaboration Channels
            </h3>

            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-carbon-950 border border-carbon-800 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Handshake className="w-5 h-5 text-brand-brightRed shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Sponsorship & Partners</h4>
                    <p className="text-xs text-gray-400">Collaborate with Romania's #1 FS EV team</p>
                  </div>
                </div>
                <Link
                  to="/partners"
                  className="px-3 py-1.5 rounded-lg bg-brand-red hover:bg-brand-brightRed text-white text-xs font-bold transition whitespace-nowrap"
                >
                  Explore
                </Link>
              </div>

              <div className="p-4 rounded-xl bg-carbon-950 border border-carbon-800 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-brand-brightRed shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Student Recruitment</h4>
                    <p className="text-xs text-gray-400">Join our engineering & business squads</p>
                  </div>
                </div>
                <Link
                  to="/recruitment"
                  className="px-3 py-1.5 rounded-lg bg-brand-red hover:bg-brand-brightRed text-white text-xs font-bold transition whitespace-nowrap"
                >
                  Join Us
                </Link>
              </div>

              <div className="p-4 rounded-xl bg-carbon-950 border border-carbon-800 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-brand-brightRed shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Media & Press Inquiries</h4>
                    <p className="text-xs text-gray-400">arttu.contact@gmail.com</p>
                  </div>
                </div>
                <a
                  href="mailto:arttu.contact@gmail.com?subject=Press%20%26%20Media%20Inquiry%20-%20ART%20TU"
                  className="px-3 py-1.5 rounded-lg border border-carbon-700 bg-carbon-900 hover:bg-carbon-800 text-white text-xs font-semibold transition whitespace-nowrap"
                >
                  Email
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

import { sponsorTiers, marqueeLogos } from '../data/sponsors';
import { Handshake, Download, ExternalLink, Star, ShieldCheck } from 'lucide-react';

interface SponsorsSectionProps {
  onOpenSponsorModal: () => void;
}

export const SponsorsSection: React.FC<SponsorsSectionProps> = ({ onOpenSponsorModal }) => {
  return (
    <section id="sponsors" className="py-24 bg-warm-100 relative border-t border-warm-250">
      
      {/* Infinite Logo Marquee Ticker */}
      <div className="mb-20 overflow-hidden py-5 bg-white border-y border-warm-250 shadow-sm">
        <div className="flex items-center whitespace-nowrap animate-marquee">
          {marqueeLogos.concat(marqueeLogos).map((item, i) => (
            <div
              key={i}
              className="inline-flex items-center justify-center mr-10 px-4 py-2 rounded-xl bg-warm-50 border border-warm-200 hover:border-brand-red/40 transition group shrink-0"
              title={item.name}
            >
              <img
                src={item.logo}
                alt={item.name}
                className="h-8 max-w-[140px] w-auto object-contain filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition duration-200"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-brand-red font-mono text-xs uppercase tracking-widest font-bold mb-2">
              <Handshake className="w-4 h-4" />
              <span>Partners in Innovation</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-warm-900 uppercase tracking-tight">
              POWERED BY OUR SPONSORS
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenSponsorModal}
              className="px-6 py-3 rounded-xl bg-brand-red hover:bg-brand-darkRed text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-brand-red/20 transition flex items-center gap-2"
            >
              <span>Download 2026 Sponsorship One-Pager</span>
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tiered Sponsor Grid */}
        <div className="space-y-12">
          {sponsorTiers.map((tierGroup) => (
            <div key={tierGroup.tier} className="bg-white p-6 sm:p-8 rounded-3xl border border-warm-250 shadow-sm">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-warm-900 uppercase flex items-center gap-2">
                    {tierGroup.tier === 'educational' && <ShieldCheck className="w-5 h-5 text-blue-600" />}
                    {tierGroup.tier === 'platinum' && <Star className="w-5 h-5 text-brand-red fill-brand-red" />}
                    {tierGroup.tier === 'gold' && <Star className="w-5 h-5 text-amber-500 fill-amber-500" />}
                    {tierGroup.tier === 'silver' && <Star className="w-5 h-5 text-slate-400 fill-slate-400" />}
                    {tierGroup.tier === 'bronze' && <Star className="w-5 h-5 text-amber-700 fill-amber-700" />}
                    {tierGroup.tier === 'supporter' && <Handshake className="w-5 h-5 text-brand-red" />}
                    <span>{tierGroup.title}</span>
                  </h3>
                  {tierGroup.subtitle && (
                    <p className="text-xs text-warm-500 mt-0.5 font-medium">{tierGroup.subtitle}</p>
                  )}
                </div>
              </div>

              <div className={
                tierGroup.tier === 'supporter' || tierGroup.tier === 'bronze'
                  ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                  : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              }>
                {tierGroup.sponsors.map((sponsor, idx) => {
                  const CardContent = (
                    <div className="h-full flex flex-col justify-between">
                      <div>
                        <div className="relative h-16 flex items-center justify-center mb-4 bg-white p-2 rounded-xl border border-warm-200 gap-3">
                          {sponsor.secondaryLogo ? (
                            <div className="flex items-center justify-center gap-2 w-full h-full px-1">
                              <div className="flex-1 flex items-center justify-center h-full">
                                <img
                                  src={sponsor.logo}
                                  alt={sponsor.name}
                                  className="max-h-11 max-w-full w-auto object-contain filter grayscale group-hover:grayscale-0 transition duration-300"
                                />
                              </div>
                              <div className="w-px h-7 bg-warm-250/80 shrink-0" aria-hidden="true" />
                              <div className="flex-1 flex items-center justify-center h-full">
                                <img
                                  src={sponsor.secondaryLogo}
                                  alt={`${sponsor.name} Secondary Logo`}
                                  className="max-h-11 max-w-full w-auto object-contain filter grayscale group-hover:grayscale-0 transition duration-300"
                                />
                              </div>
                            </div>
                          ) : (
                            <img
                              src={sponsor.logo}
                              alt={sponsor.name}
                              className="max-h-12 max-w-[180px] object-contain filter grayscale group-hover:grayscale-0 transition duration-300"
                            />
                          )}

                          {sponsor.website && (
                            <div className="absolute top-2 right-2 text-warm-300 group-hover:text-brand-red opacity-0 group-hover:opacity-100 transition-all duration-200">
                              <ExternalLink className="w-3.5 h-3.5" />
                            </div>
                          )}
                        </div>
                        <h4 className="font-display font-bold text-lg text-warm-900 mb-2 group-hover:text-brand-red transition">
                          {sponsor.name}
                        </h4>
                        {sponsor.description && (
                          <p className={`text-xs text-warm-600 leading-relaxed ${sponsor.tier === 'educational' ? '' : 'line-clamp-3'}`}>
                            {sponsor.description}
                          </p>
                        )}
                      </div>
                    </div>
                  );

                  return sponsor.website ? (
                    <a
                      key={idx}
                      href={sponsor.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-warm-50 p-6 rounded-2xl border border-warm-200 hover:border-brand-red/50 hover:bg-white hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group hover:shadow-md cursor-pointer block text-inherit no-underline"
                    >
                      {CardContent}
                    </a>
                  ) : (
                    <div
                      key={idx}
                      className="bg-warm-50 p-6 rounded-2xl border border-warm-200 transition-all duration-300 flex flex-col justify-between"
                    >
                      {CardContent}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Sponsor Value Proposition Box */}
        <div className="mt-16 bg-gradient-to-r from-red-50 via-warm-50 to-warm-100 p-8 rounded-3xl border border-brand-red/25 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2">
            <h3 className="font-display font-bold text-2xl text-warm-900">
              Why Partner with ART TU?
            </h3>
            <p className="text-sm text-warm-700 max-w-2xl leading-relaxed">
              Gain direct recruitment access to Romania's top automotive, software, and electrical engineering students, prominent racecar livery branding, and international paddock exposure.
            </p>
          </div>
          <button
            onClick={onOpenSponsorModal}
            className="whitespace-nowrap px-6 py-3.5 rounded-xl bg-brand-red hover:bg-brand-darkRed text-white font-bold text-xs uppercase tracking-wider transition shadow-md shadow-brand-red/25"
          >
            Become a Partner
          </button>
        </div>

      </div>
    </section>
  );
};

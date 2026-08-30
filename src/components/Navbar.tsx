import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, ChevronDown, Handshake, Trophy, Users, History } from 'lucide-react';
import { ArtTuLogo } from './ArtTuLogo';


interface SubLink {
  label: string;
  path: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface NavItem {
  label: string;
  path: string;
  subLinks?: SubLink[];
}

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [historyDropdownOpen, setHistoryDropdownOpen] = useState(false);
  const [mobileHistoryExpanded, setMobileHistoryExpanded] = useState(false);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
    setHistoryDropdownOpen(false);
  }, [location.pathname]);

  const navItems: NavItem[] = [
    { label: "Home", path: "/" },
    { label: "The Car", path: "/car" },
    {
      label: "History",
      path: "/history",
      subLinks: [
        {
          label: "Racing History",
          path: "/history",
          description: "2026 Champions, FS Germany & FS Balkans timeline",
          icon: Trophy,
        },
        {
          label: "Past Teams & Members",
          path: "/history/team",
          description: "Generations 2019-2026, leaders & alumni roster",
          icon: Users,
        },
      ],
    },
    { label: "Departments", path: "/departments" },
    { label: "Events", path: "/events" },
    { label: "Support (230)", path: "/support" },
    { label: "Contact", path: "/contact" },
  ];

  const isHomePage = location.pathname === '/';
  const isTransparent = isHomePage && !isScrolled;

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setHistoryDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setHistoryDropdownOpen(false);
    }, 180);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? 'bg-gradient-to-b from-black/80 via-black/45 to-transparent backdrop-blur-[6px] border-b border-white/10 py-4 shadow-lg shadow-black/20'
          : isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-warm-200/80 shadow-md py-3'
          : 'bg-warm-100/90 backdrop-blur-sm border-b border-warm-200/40 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo & Motorsport Lockup */}
        <Link to="/" className="flex items-center gap-3 group select-none py-1">
          {/* Official Motorsport Vector Emblem */}
          <div className="relative flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
            <ArtTuLogo
              variant={isTransparent ? 'white' : 'light'}
              className={`h-9 w-auto transition-all duration-300 ${
                isTransparent
                  ? 'drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]'
                  : 'drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]'
              }`}
            />
          </div>

          {/* Typography Lockup */}
          <div className="flex flex-col justify-center">
            <span
              className={`font-display font-black text-xl tracking-tight uppercase leading-none transition-colors ${
                isTransparent
                  ? 'text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]'
                  : 'text-warm-900'
              }`}
            >
              ART<span className={isTransparent ? 'text-white' : 'text-brand-red'}>TU</span>
            </span>

            {/* Sub-headline / Heritage Tag */}
            <span
              className={`text-[9px] sm:text-[10px] font-mono tracking-[0.18em] uppercase font-bold transition-colors leading-none mt-1 ${
                isTransparent
                  ? 'text-white/85 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]'
                  : 'text-warm-500'
              }`}
            >
              UTCN Formula Student
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
          {navItems.map((item) => {
            const hasSubLinks = Boolean(item.subLinks && item.subLinks.length > 0);
            const isHistoryActive =
              location.pathname === '/history' ||
              location.pathname === '/competitions' ||
              location.pathname === '/history/team' ||
              location.pathname === '/team-history';
            const isActive = hasSubLinks
              ? isHistoryActive
              : location.pathname === item.path;

            if (hasSubLinks) {
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={item.path}
                    className={`inline-flex items-center gap-1 text-xs uppercase tracking-wider font-bold transition-all duration-200 py-1 ${
                      isActive
                        ? isTransparent
                          ? 'text-brand-brightRed border-b-2 border-brand-brightRed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'
                          : 'text-brand-red border-b-2 border-brand-red'
                        : isTransparent
                        ? 'text-white/90 hover:text-brand-brightRed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'
                        : 'text-warm-800 hover:text-brand-red'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        historyDropdownOpen ? 'rotate-180 text-brand-red' : 'opacity-70'
                      }`}
                    />
                  </Link>

                  {/* Dropdown Menu on Desktop Hover */}
                  {historyDropdownOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 w-72 animate-in fade-in slide-in-from-top-2 duration-150">
                      <div className="bg-white rounded-xl shadow-lg border border-warm-200 p-2 space-y-1">
                        {item.subLinks?.map((sub) => {
                          const Icon = sub.icon;
                          const isSubActive =
                            location.pathname === sub.path ||
                            (sub.path === '/history' && location.pathname === '/competitions') ||
                            (sub.path === '/history/team' && location.pathname === '/team-history');

                          return (
                            <Link
                              key={sub.path}
                              to={sub.path}
                              onClick={() => setHistoryDropdownOpen(false)}
                              className={`flex items-start gap-3 p-2 rounded-lg transition ${
                                isSubActive
                                  ? 'bg-brand-red/10 border border-brand-red/20'
                                  : 'hover:bg-warm-100'
                              }`}
                            >
                              <div className={`p-2 rounded-md mt-0.5 shrink-0 ${
                                isSubActive ? 'bg-brand-red text-white' : 'bg-warm-150 text-warm-700'
                              }`}>
                                <Icon className="w-4 h-4" />
                              </div>
                              <div>
                                <div className={`text-xs font-bold font-display uppercase tracking-tight ${
                                  isSubActive ? 'text-brand-red' : 'text-warm-900'
                                }`}>
                                  {sub.label}
                                </div>
                                <div className="text-[11px] text-warm-600 leading-snug font-sans font-normal mt-0.5">
                                  {sub.description}
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                to={item.path}
                className={`text-xs uppercase tracking-wider font-bold transition-all duration-200 py-1 ${
                  isActive
                    ? isTransparent
                      ? 'text-brand-brightRed border-b-2 border-brand-brightRed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'
                      : 'text-brand-red border-b-2 border-brand-red'
                    : isTransparent
                    ? 'text-white/90 hover:text-brand-brightRed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'
                    : 'text-warm-800 hover:text-brand-red'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <Link
            to="/partners"
            className={`px-3.5 py-2 text-xs font-bold uppercase tracking-wider rounded-lg border transition flex items-center gap-1.5 ${
              isTransparent
                ? 'border-white/30 bg-black/40 hover:bg-black/60 text-white hover:text-white backdrop-blur-md shadow-xs'
                : 'border-warm-300 bg-white hover:bg-warm-50 text-warm-800 hover:text-brand-red shadow-xs'
            }`}
          >
            <Handshake className={`w-3.5 h-3.5 ${isTransparent ? 'text-brand-brightRed' : 'text-brand-red'}`} />
            <span>Partner</span>
          </Link>
          
          <Link
            to="/recruitment"
            className="px-3.5 py-2 text-xs font-bold uppercase tracking-wider rounded-lg bg-brand-red hover:bg-brand-darkRed text-white shadow-xs shadow-brand-red/30 transition flex items-center gap-1.5"
          >
            <span>Join Team</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden p-2 rounded-lg focus:outline-none transition shadow-xs ${
            isTransparent
              ? 'bg-black/50 border border-white/25 text-white hover:text-brand-brightRed backdrop-blur-md'
              : 'bg-white border border-warm-200 text-warm-800 hover:text-brand-red'
          }`}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden px-4 pt-4 pb-6 space-y-3 shadow-2xl animate-in fade-in duration-200 border-b max-h-[85vh] overflow-y-auto ${
            isTransparent
              ? 'bg-[#0d0e12] border-white/15 text-white shadow-black/80'
              : 'bg-white border-warm-250 text-warm-900 shadow-xl'
          }`}
        >
          <div className="space-y-1.5">
            {navItems.map((item) => {
              if (item.subLinks && item.subLinks.length > 0) {
                const isHistoryActive =
                  location.pathname === '/history' ||
                  location.pathname === '/competitions' ||
                  location.pathname === '/history/team' ||
                  location.pathname === '/team-history';

                return (
                  <div key={item.label} className="rounded-lg overflow-hidden border border-warm-200/40">
                    <button
                      onClick={() => setMobileHistoryExpanded(!mobileHistoryExpanded)}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 text-xs font-bold uppercase tracking-wider transition ${
                        isHistoryActive
                          ? isTransparent
                            ? 'bg-brand-red/20 text-brand-brightRed'
                            : 'bg-brand-red/10 text-brand-red'
                          : isTransparent
                          ? 'text-white hover:bg-white/10'
                          : 'text-warm-800 hover:bg-warm-100'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <History className="w-4 h-4 text-brand-red" />
                        <span>{item.label}</span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          mobileHistoryExpanded ? 'rotate-180 text-brand-red' : 'opacity-60'
                        }`}
                      />
                    </button>

                    {/* Mobile Submenu Accordion */}
                    {mobileHistoryExpanded && (
                      <div className={`px-2 py-2 space-y-1 ${isTransparent ? 'bg-black/40' : 'bg-warm-50'}`}>
                        {item.subLinks.map((sub) => {
                          const Icon = sub.icon;
                          const isSubActive =
                            location.pathname === sub.path ||
                            (sub.path === '/history' && location.pathname === '/competitions') ||
                            (sub.path === '/history/team' && location.pathname === '/team-history');

                          return (
                            <Link
                              key={sub.path}
                              to={sub.path}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`flex items-center gap-2.5 px-3 py-2 rounded-md text-xs font-semibold transition ${
                                isSubActive
                                  ? 'bg-brand-red text-white'
                                  : isTransparent
                                  ? 'text-warm-200 hover:bg-white/10'
                                  : 'text-warm-700 hover:bg-warm-200/70'
                              }`}
                            >
                              <Icon className="w-3.5 h-3.5 shrink-0" />
                              <div className="flex flex-col">
                                <span className="font-bold">{sub.label}</span>
                                <span className={`text-[10px] font-normal ${isSubActive ? 'text-white/80' : 'opacity-70'}`}>
                                  {sub.description}
                                </span>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3.5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition ${
                    isActive
                      ? isTransparent
                        ? 'bg-brand-red/25 text-brand-brightRed border border-brand-red/40'
                        : 'bg-brand-red/10 text-brand-red border border-brand-red/20'
                      : isTransparent
                      ? 'text-white/90 hover:bg-white/10'
                      : 'text-warm-800 hover:bg-warm-100'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className={`pt-3 border-t flex flex-col gap-2 ${isTransparent ? 'border-white/15' : 'border-warm-200'}`}>
            <Link
              to="/recruitment"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 text-center text-xs font-bold uppercase tracking-wider rounded-lg bg-brand-red text-white shadow-xs"
            >
              Join Team
            </Link>
            <Link
              to="/partners"
              onClick={() => setMobileMenuOpen(false)}
              className={`w-full py-2.5 text-center text-xs font-bold uppercase tracking-wider rounded-lg border ${
                isTransparent
                  ? 'border-white/20 bg-white/10 text-white'
                  : 'border-warm-300 bg-warm-50 text-warm-800'
              }`}
            >
              Partner With Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};




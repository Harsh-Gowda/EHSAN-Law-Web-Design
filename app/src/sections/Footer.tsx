import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Mail, MapPin, Linkedin, Facebook, ArrowUpRight } from 'lucide-react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(footerRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 95%',
            once: true,
          }
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, [location.pathname]);

  const handleLinkClick = (link: { label: string, path: string, id?: string }) => {
    if (location.pathname === '/' && link.id) {
      const element = document.getElementById(link.id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    navigate(link.path, { state: { scrollTo: link.id } });
  };

  const quickLinks = [
    { label: 'Home', path: '/', id: 'hero' },
    { label: 'About', path: '/', id: 'about' },
    { label: 'Services', path: '/', id: 'services' },
    { label: 'Attorney', path: '/', id: 'attorney' },
    { label: 'Blog', path: '/blog' },
    { label: 'FAQ', path: '/', id: 'faq' },
  ];

  const practiceAreas = [
    { label: 'Family Immigration', path: '/services/family-immigration' },
    { label: 'Business & Employment', path: '/services/business-immigration' },
    { label: 'Deportation Defense', path: '/services/deportation-defense' },
    { label: 'Citizenship', path: '/services/citizenship' },
    { label: 'Asylum', path: '/services/asylum' },
  ];

  return (
    <footer
      ref={footerRef}
      className="bg-[#0B1A2F] text-white pt-20 pb-12 lg:pt-32 lg:pb-16"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 mb-20 lg:mb-24">

          {/* Brand Column */}
          <div className="space-y-8">
            <Link to="/" onClick={() => handleLinkClick({ label: 'Home', path: '/' })} className="block group">
              <img
                src="/logo.png"
                alt="Ehsaan Law Logo"
                className="h-20 lg:h-24 w-auto brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Providing clear counsel and respectful representation for individuals and businesses navigating the complexities of U.S. immigration law.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
                { icon: Facebook, label: 'Facebook', href: 'https://facebook.com' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C69A2C] hover:text-navy transition-all duration-300 border border-white/10"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C69A2C] font-bold mb-8">
              Services
            </h4>
            <ul className="space-y-4">
              {practiceAreas.map((area) => (
                <li key={area.path}>
                  <Link
                    to={area.path}
                    className="text-white/50 hover:text-white transition-colors duration-200 text-sm flex items-center group"
                  >
                    <span>{area.label}</span>
                    <ArrowUpRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C69A2C] font-bold mb-8">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleLinkClick(link)}
                    className="text-white/50 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C69A2C] font-bold mb-8">
              Contact
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-[#C69A2C]/10 transition-colors">
                  <MapPin className="w-4 h-4 text-[#C69A2C]" />
                </div>
                <span className="text-white/50 text-sm leading-relaxed group-hover:text-white transition-colors">
                  15215 52nd Ave S, Suite 203<br />
                  Tukwila, WA 98188
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-[#C69A2C]/10 transition-colors">
                  <Phone className="w-4 h-4 text-[#C69A2C]" />
                </div>
                <a
                  href="tel:2062346883"
                  className="text-white/50 hover:text-white transition-colors duration-200 text-sm"
                >
                  (206) 234-6883
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-[#C69A2C]/10 transition-colors">
                  <Mail className="w-4 h-4 text-[#C69A2C]" />
                </div>
                <a
                  href="mailto:info@ehsanlawpllc.com"
                  className="text-white/50 hover:text-white transition-colors duration-200 text-sm"
                >
                  info@ehsanlawpllc.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="space-y-2">
              <p className="text-white/30 text-[10px] uppercase tracking-widest">
                Attorney Advertising. Prior results do not guarantee similar outcomes.
              </p>
              <p className="text-white/20 text-[10px]">
                © 2026 Ehsan Law, PLLC. All Rights Reserved.
              </p>
            </div>
            <div className="flex items-center gap-8">
              <button className="text-white/30 hover:text-white transition-colors text-[10px] uppercase tracking-widest font-bold">
                Privacy Policy
              </button>
              <button className="text-white/30 hover:text-white transition-colors text-[10px] uppercase tracking-widest font-bold">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

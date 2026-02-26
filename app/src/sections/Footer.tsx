import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Mail, MapPin, Linkedin, Facebook } from 'lucide-react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(footerRef.current,
        { y: 12, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // Force an initial refresh to ensure footer is positioned correctly
      ScrollTrigger.refresh();
    }, footerRef);

    return () => ctx.revert();
  }, [location.pathname]);

  const handleLinkClick = (link: { label: string, path: string, id?: string }) => {
    if (location.pathname === link.path && link.id) {
      const element = document.getElementById(link.id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(link.path, { state: { scrollTo: link.id } });
    }
  };

  const quickLinks = [
    { label: 'Home', path: '/', id: 'hero' },
    { label: 'About', path: '/about', id: 'about' },
    { label: 'Services', path: '/', id: 'services' },
    { label: 'Attorney', path: '/attorney', id: 'attorney' },
    { label: 'Contact', path: '/contact', id: 'contact' },
  ];

  const practiceAreas = [
    { label: 'Family-Based Immigration', path: '/services/family-immigration' },
    { label: 'Business & Employment', path: '/services/business-immigration' },
    { label: 'Deportation Defense', path: '/services/deportation-defense' },
    { label: 'Citizenship', path: '/services/citizenship' },
    { label: 'Asylum', path: '/services/asylum' },
  ];

  return (
    <footer
      ref={footerRef}
      className="bg-navy text-white py-16 lg:py-20 pb-24 lg:pb-20"
    >
      <div className="px-6 lg:px-[6vw]">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12 lg:mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" onClick={() => handleLinkClick(quickLinks[0])} className="mb-6 block group">
              <img
                src="/logo.png"
                alt="Ehsaan Law Logo"
                className="h-24 w-auto brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-white/70 text-sm mb-6">
              Clear counsel. Respectful representation.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="caption-text text-white/50 mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleLinkClick(link)}
                    className="text-white/80 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="caption-text text-white/50 mb-6">
              Practice Areas
            </h4>
            <ul className="space-y-3">
              {practiceAreas.map((area) => (
                <li key={area.path}>
                  <button
                    onClick={() => handleLinkClick(area)}
                    className="text-white/80 hover:text-gold transition-colors text-sm text-left"
                  >
                    {area.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="caption-text text-white/50 mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm">
                  15215 52nd Ave S, Suite 203<br />
                  Tukwila, WA 98188
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a
                  href="tel:2062346883"
                  className="text-white/80 hover:text-gold transition-colors text-sm"
                >
                  (206) 234-6883
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a
                  href="mailto:info@ehsanlawpllc.com"
                  className="text-white/80 hover:text-gold transition-colors text-sm"
                >
                  info@ehsanlawpllc.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <p className="text-white/50 text-xs">
              Attorney Advertising. Prior results do not guarantee similar outcomes.
            </p>
            <div className="flex items-center gap-6">
              <button className="text-white/50 hover:text-white transition-colors text-xs">
                Privacy Policy
              </button>
              <button className="text-white/50 hover:text-white transition-colors text-xs">
                Terms of Service
              </button>
              <span className="text-white/30 text-xs">
                © 2026 Ehsan Law, PLLC
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

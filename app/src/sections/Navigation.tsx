import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/', id: 'hero' },
    { label: 'About', path: '/about', id: 'about' },
    { label: 'Services', path: '/services', id: 'services' },
    { label: 'Attorney', path: '/attorney', id: 'attorney' },
    { label: 'Blog', path: '/blog', id: 'blog' },
    { label: 'FAQ', path: '/faq', id: 'faq' },
    { label: 'Contact', path: '/contact', id: 'contact' },
  ];

  const handleNavClick = (link: { label: string, path: string, id: string }) => {
    setIsMenuOpen(false);

    if (location.pathname === link.path) {
      if (link.id) {
        const element = document.getElementById(link.id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      navigate(link.path, { state: { scrollTo: link.id } });
    }
  };

  useEffect(() => {
    if (location.state?.scrollTo) {
      const id = location.state.scrollTo;
      const element = document.getElementById(id);
      if (element) {
        // Use a small delay to ensure the page has rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
          // Clear state to avoid scrolling again on back button
          navigate(location.pathname, { replace: true, state: {} });
        }, 150);
      }
    }
  }, [location, navigate]);

  const isHomePage = location.pathname === '/';
  const shouldShowSolid = isScrolled || !isHomePage;

  return (
    <>
      {/* Main Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${shouldShowSolid
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
          }`}
      >
        <div className="px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick(navLinks[0])}
            className="flex items-center gap-2 group"
          >
            <img
              src="/logo.png"
              alt="Ehsaan Law Logo"
              className={`h-16 lg:h-24 w-auto transition-all duration-300 ${shouldShowSolid ? 'brightness-100' : 'brightness-0 invert'
                }`}
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link)}
                className={`text-sm font-medium transition-colors hover:text-gold ${shouldShowSolid ? 'text-navy' : 'text-white/90'
                  }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            {/* CTA Button - Desktop */}
            <a
              href="tel:2062346883"
              className={`hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${shouldShowSolid
                ? 'bg-navy text-white hover:bg-navy/90'
                : 'bg-gold text-navy hover:bg-gold/90'
                }`}
            >
              <Phone className="w-4 h-4" />
              (206) 234-6883
            </a>

            {/* Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className={`p-2 transition-colors ${shouldShowSolid ? 'text-navy' : 'text-white'
                }`}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[200] menu-fade-in">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-navy/95 backdrop-blur-md"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu Content */}
          <div className="relative h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-6 lg:px-12 py-6">
              <img
                src="/logo.png"
                alt="Ehsaan Law Logo"
                className="h-16 lg:h-24 w-auto brightness-0 invert"
              />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-white hover:text-gold transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 flex flex-col justify-center px-6 lg:px-24">
              <nav className="space-y-4">
                {navLinks.map((link, index) => (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link)}
                    className="block text-left"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <span className="font-serif text-4xl lg:text-6xl text-white hover:text-gold transition-colors">
                      {link.label}
                    </span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Footer Info */}
            <div className="px-6 lg:px-12 py-8 border-t border-white/10">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="text-white/70 text-sm">
                  <p>15215 52nd Ave S, Suite 203</p>
                  <p>Tukwila, WA 98188</p>
                </div>
                <a
                  href="tel:2062346883"
                  className="flex items-center gap-2 text-gold hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-lg font-medium">(206) 234-6883</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[90] bg-white border-t border-gray-100 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] px-6 py-4 flex items-center justify-between safe-area-bottom">
        <a
          href="tel:2062346883"
          className="flex items-center gap-2 text-navy font-medium"
        >
          <Phone className="w-5 h-5" />
          Call Now
        </a>
        <button
          onClick={() => handleNavClick(navLinks[6])}
          className="bg-gold text-navy px-5 py-2.5 rounded-full text-sm font-medium"
        >
          Free Consultation
        </button>
      </div>
    </>
  );
};

export default Navigation;

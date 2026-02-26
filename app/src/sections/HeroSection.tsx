import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);
  const captionLeftRef = useRef<HTMLParagraphElement>(null);
  const captionRightRef = useRef<HTMLParagraphElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simple entrance animation on load — no pinning, no scroll tricks
      const tl = gsap.timeline({ delay: 0.2 });

      tl.from(bgRef.current, {
        opacity: 0,
        duration: 1.2,
        ease: 'power2.out',
      }, 0);

      tl.from([leftCardRef.current, rightCardRef.current], {
        y: 30,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power2.out',
      }, 0.3);

      tl.from([captionLeftRef.current, captionRightRef.current], {
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power2.out',
      }, 0.7);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative w-screen min-h-[100svh] lg:h-screen overflow-hidden bg-navy"
    >
      {/* Background Image */}
      <div ref={bgRef} className="absolute inset-0">
        <img
          src="/hero_family_hands.jpg"
          alt="Law office team"
          className="w-full h-full object-cover img-film-grade"
        />
        <div className="absolute inset-0 bg-navy/60" />
      </div>

      {/* Main Content */}
      <div className="relative h-full min-h-[100svh] container mx-auto flex flex-col lg:flex-row items-center lg:items-center px-6 md:px-12 lg:px-12 py-16 md:py-24 lg:py-0 justify-center lg:justify-between gap-12 md:gap-16 lg:gap-6">

        {/* Left Call Card */}
        <div
          ref={leftCardRef}
          className="w-full md:w-[80%] lg:w-[42vw] bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 md:p-8 lg:p-10 will-change-transform"
        >
          <p className="caption-text text-gold mb-3 lg:mb-4 text-xs lg:text-sm uppercase tracking-widest font-bold">Immigration Law Firm · Seattle</p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Your Path<br />to the USA
          </h1>
          <p className="body-text text-white/80 mb-8 max-w-lg">
            Expert representation for families, businesses, and individuals navigating U.S. immigration law.
          </p>
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-gold w-full sm:w-auto"
          >
            Free Consultation
          </button>
        </div>

        {/* Right Stats Card */}
        <div
          ref={rightCardRef}
          className="w-full md:w-[80%] lg:w-[26vw] bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 md:p-8 lg:p-10 will-change-transform"
        >
          <div className="grid grid-cols-3 lg:grid-cols-1 gap-4 lg:gap-6">
            <div className="border-b-0 lg:border-b border-white/15 pb-0 lg:pb-6">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">15+</p>
              <p className="caption-text text-white/60 text-[10px] lg:text-xs">Years of Experience</p>
            </div>
            <div className="border-b-0 lg:border-b border-white/15 pb-0 lg:pb-6">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">2,000+</p>
              <p className="caption-text text-white/60 text-[10px] lg:text-xs">Cases Handled</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">98%</p>
              <p className="caption-text text-white/60 text-[10px] lg:text-xs">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Captions */}
      <p
        ref={captionLeftRef}
        className="absolute left-6 lg:left-[6vw] bottom-[3vh] text-white/50 text-xs italic"
      >
        EHSAN Law · Tukwila, WA
      </p>
      <p
        ref={captionRightRef}
        className="absolute right-6 lg:right-[6vw] bottom-[3vh] text-white/50 text-xs italic"
      >
        Se habla español · فارسی
      </p>

      {/* See More services */}
      <button
        onClick={() => navigate('/services/family-immigration')}
        className="hidden"
        aria-hidden
      />
    </section>
  );
};

export default HeroSection;

import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AttorneySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        },
      });

      tl.from(leftRef.current, { opacity: 0, x: -30, duration: 0.8, ease: 'power2.out' })
        .from(imageRef.current, { opacity: 0, scale: 0.96, duration: 0.8, ease: 'power2.out' }, '-=0.55')
        .from(statsRef.current?.querySelectorAll('.stat-pill') ?? [], {
          opacity: 0, y: 16, stagger: 0.1, duration: 0.5, ease: 'power2.out',
        }, '-=0.4');
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="attorney"
      className="w-full bg-[#F4F6F8] py-16 md:py-28 lg:py-36 overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16">

        {/* Section badge */}
        <div className="inline-flex items-center gap-2 bg-white border border-[#C69A2C]/20 rounded-full px-4 py-2 mb-14">
          <span className="w-2 h-2 rounded-full bg-[#C69A2C]" />
          <span className="caption-text text-[#C69A2C]">Meet Your Attorney</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left: Attorney Portrait */}
          <div ref={imageRef} className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden card-shadow aspect-[3/4]">
              <img
                src="/attorney_portrait.jpg"
                alt="Asif Ehsan - Managing Attorney"
                className="w-full h-full object-cover img-film-grade"
              />
              {/* Name badge overlaid */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0B1A2F] to-transparent">
                <p className="caption-text text-[#C69A2C] mb-1">Managing Attorney</p>
                <h3 className="font-serif text-white text-2xl font-semibold">Asif Ehsan</h3>
                <p className="text-white/50 text-xs mt-1">J.D. — University of Washington</p>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div ref={leftRef} className="lg:col-span-7">
            <h2 className="heading-lg text-navy mb-6 leading-tight">
              Fighting for Your
              <br />
              <span className="text-[#C69A2C]">American Dream</span>
            </h2>

            <p className="body-text text-gray mb-6 leading-relaxed max-w-xl">
              With over 15 years of dedicated immigration practice, Asif Ehsan brings strategic thinking and genuine compassion to every case. He has helped thousands of individuals and families navigate the complexities of U.S. immigration law — from initial applications to complex appellate proceedings.
            </p>

            <p className="body-text text-gray mb-10 leading-relaxed max-w-xl">
              His reputation is built on results, transparency, and treating every client as a person — not a case number.
            </p>

            {/* Stats pills */}
            <div ref={statsRef} className="grid grid-cols-3 gap-4 mb-10">
              {[
                { value: '2,000+', label: 'Cases Won' },
                { value: '15+', label: 'Years Exp.' },
                { value: '98%', label: 'Satisfaction' },
              ].map((s, i) => (
                <div key={i} className="stat-pill bg-white rounded-2xl p-5 card-shadow text-center">
                  <p className="font-serif text-navy text-2xl lg:text-3xl font-bold mb-1">{s.value}</p>
                  <p className="text-gray/60 text-xs uppercase tracking-widest">{s.label}</p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              onClick={e => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-[#0B1A2F] text-white font-medium px-7 py-4 rounded-full hover:bg-[#0B1A2F]/80 transition-colors group"
            >
              Schedule a consultation
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AttorneySection;

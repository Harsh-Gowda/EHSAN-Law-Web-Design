import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Users, Award, Scale } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '2,000+', label: 'Cases Won', icon: Award },
  { value: '15+', label: 'Years Experience', icon: Scale },
  { value: '98%', label: 'Client Satisfaction', icon: Users },
  { value: '50+', label: 'States Served', icon: Shield },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        },
      });

      tl.from(badgeRef.current, { opacity: 0, y: 16, duration: 0.6, ease: 'power2.out' })
        .from(headingRef.current, { opacity: 0, y: 24, duration: 0.7, ease: 'power2.out' }, '-=0.3')
        .from(bodyRef.current, { opacity: 0, y: 16, duration: 0.6, ease: 'power2.out' }, '-=0.4')
        .from(statsRef.current?.querySelectorAll('.stat-item') ?? [], {
          opacity: 0, y: 20, stagger: 0.1, duration: 0.5, ease: 'power2.out',
        }, '-=0.3')
        .from(imageRef.current, { opacity: 0, scale: 0.97, duration: 0.8, ease: 'power2.out' }, '-=0.6');
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="w-full bg-white py-16 md:py-28 lg:py-36"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Content */}
          <div>
            <div ref={badgeRef} className="inline-flex items-center gap-2 bg-[#F4F6F8] border border-[#C69A2C]/20 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#C69A2C]" />
              <span className="caption-text text-[#C69A2C]">Immigration Law · Tukwila, WA</span>
            </div>

            <div ref={headingRef}>
              <h2 className="heading-lg text-navy mb-2 leading-tight">
                Passionate Advocates
              </h2>
              <h2 className="heading-lg text-navy/30 mb-8 leading-tight">
                for Every Family
              </h2>
            </div>

            <div ref={bodyRef}>
              <p className="body-text text-gray mb-6 leading-relaxed">
                At EHSAN Law, we believe immigration is more than paperwork — it's about your story, your family, and your future. Based in Tukwila, we serve the greater Seattle area and clients nationwide with expert, empathetic immigration counsel.
              </p>
              <p className="body-text text-gray leading-relaxed">
                Our mission is to provide clear, compassionate guidance through every step of the immigration process — so you can focus on what matters most.
              </p>
            </div>

            {/* Stats Grid */}
            <div ref={statsRef} className="mt-12 grid grid-cols-2 gap-6">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="stat-item group">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-[#C69A2C]/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-[#C69A2C]" />
                      </div>
                      <span className="text-2xl lg:text-3xl font-bold font-serif text-navy">{stat.value}</span>
                    </div>
                    <p className="text-xs uppercase tracking-widest text-gray/70 pl-11">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Image */}
          <div ref={imageRef} className="relative">
            <div className="rounded-3xl overflow-hidden card-shadow aspect-[4/5]">
              <img
                src="/about_office_meeting.jpg"
                alt="EHSAN Law office meeting"
                className="w-full h-full object-cover img-film-grade"
              />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-6 -left-6 bg-[#0B1A2F] rounded-2xl p-5 card-shadow hidden md:block">
              <p className="text-white/60 text-xs uppercase tracking-widest mb-1">Trusted by</p>
              <p className="text-white font-serif text-2xl font-bold">2,000+</p>
              <p className="text-[#C69A2C] text-xs mt-1">Families nationwide</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AttorneySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imagePanelRef = useRef<HTMLDivElement>(null);
  const contentPanelRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([imagePanelRef.current, contentPanelRef.current], {
        opacity: 0,
        y: 30,
        duration: 0.9,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          once: true,
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="attorney"
      className="w-full bg-cream"
    >
      <div className="flex flex-col lg:flex-row min-h-[80vh] lg:h-screen">
        {/* Left Image Panel */}
        <div
          ref={imagePanelRef}
          className="w-full lg:w-1/2 h-[45vh] lg:h-full overflow-hidden"
        >
          <img
            src="/attorney_portrait.jpg"
            alt="Asif Ehsan - Managing Attorney"
            className="w-full h-full object-cover img-film-grade"
          />
        </div>
        {/* Right Content Panel */}
        <div
          ref={contentPanelRef}
          className="w-full lg:w-1/2 bg-white lg:bg-transparent flex flex-col justify-center px-6 lg:px-12 py-12 lg:py-0"
        >
          <div className="max-w-xl mx-auto lg:mx-0">
            <p className="caption-text text-gold mb-4">
              Managing Attorney
            </p>
            <h2 className="heading-lg text-navy mb-2">Asif Ehsan</h2>
            <p className="text-gray/60 font-medium mb-6 uppercase tracking-wider text-xs">J.D., University of Washington</p>

            <p className="body-text text-gray mb-8">
              With over 15 years of experience in immigration law, Asif Ehsan has helped thousands of individuals and families navigate the complexities of the U.S. legal system. He is known for his strategic approach and tireless advocacy for his clients.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-navy font-bold text-2xl mb-1">2k+</p>
                <p className="text-gray/60 text-xs uppercase tracking-widest">Cases Won</p>
              </div>
              <div>
                <p className="text-navy font-bold text-2xl mb-1">15+</p>
                <p className="text-gray/60 text-xs uppercase tracking-widest">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttorneySection;

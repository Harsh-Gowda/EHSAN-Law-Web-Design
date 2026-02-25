import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
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
      id="about"
      className="w-full bg-cream py-20 lg:py-32"
    >
      <div className="flex flex-col lg:flex-row min-h-[80vh] lg:h-screen">
        {/* Left Image Panel */}
        <div
          ref={imagePanelRef}
          className="w-full lg:w-1/2 h-[45vh] lg:h-full overflow-hidden"
        >
          <img
            src="/about_office_meeting.jpg"
            alt="Office meeting"
            className="w-full h-full object-cover img-film-grade"
          />
        </div>
        {/* Right Content Panel */}
        <div
          ref={contentPanelRef}
          className="w-full lg:w-1/2 flex flex-col justify-center px-6 lg:px-12 py-12 lg:py-0"
        >
          <div className="max-w-xl mx-auto lg:mx-0">
            <p className="caption-text text-gold mb-4">Immigration Law · Seattle</p>
            <h2 className="heading-lg text-navy mb-6">Who We Are</h2>
            <p className="body-text text-gray mb-8">
              At EHSAN Law, we understand that immigration is more than just paperwork—it's about your future, your family, and your life. Based in Tukwila, we serve the greater Seattle area with dedicated legal expertise in all areas of U.S. immigration law.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-navy font-bold mb-2">Our Mission</h3>
                <p className="text-gray text-sm leading-relaxed">
                  To provide compassionate, high-quality legal representation that helps you navigate complex immigration challenges with confidence and clarity.
                </p>
              </div>
              <div>
                <h3 className="text-navy font-bold mb-2">Our Vision</h3>
                <p className="text-gray text-sm leading-relaxed">
                  To be the trusted advocate for immigrants in Washington State, empowering individuals and businesses to achieve their American dreams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FAQSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(headingRef.current,
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // Accordion items animation
      const items = accordionRef.current?.querySelectorAll('.faq-item');
      if (items) {
        gsap.fromTo(items,
          { y: 16, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: accordionRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const faqs = [
    {
      question: 'Do I need an immigration attorney?',
      answer: 'While not required, an attorney can help you navigate complex laws, avoid costly mistakes, and improve your chances of success. We offer a free initial consultation to discuss your case and determine how we can help.',
    },
    {
      question: 'How long will my case take?',
      answer: 'Processing times vary significantly depending on the type of case, current backlogs, and government processing speeds. During your consultation, we will provide a realistic timeline based on your specific situation and keep you informed of any changes.',
    },
    {
      question: 'What documents should I prepare?',
      answer: 'Required documents depend on your case type. Generally, you will need identification, proof of relationships, financial documents, and case-specific forms. We provide a comprehensive checklist after your initial consultation.',
    },
    {
      question: 'Can you help if I am in removal proceedings?',
      answer: 'Yes. We represent clients in immigration court, including bond hearings, cancellation of removal, asylum claims, and appeals. Time is critical in these cases—contact us immediately if you or a loved one is detained or has a court date.',
    },
    {
      question: 'Do you offer payment plans?',
      answer: 'Yes, we understand that legal fees can be a burden. We offer flexible payment plans for many case types and accept credit cards. During your consultation, we will discuss fees and payment options transparently.',
    },
    {
      question: 'Do you work with clients outside Washington State?',
      answer: 'Absolutely. Immigration law is federal, and we represent clients nationwide. We use video conferencing and secure document sharing to work with clients across the country and around the world.',
    },
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      className="bg-white py-20 lg:py-32"
    >
      <div className="px-6 lg:px-[6vw]">
        {/* Heading */}
        <div ref={headingRef} className="mb-12 lg:mb-16">
          <h2 className="heading-lg text-navy mb-4">
            Frequently Asked Questions
          </h2>
          <p className="body-text text-gray max-w-2xl">
            Get answers to common questions about immigration law and our services.
          </p>
        </div>

        {/* Accordion */}
        <div
          ref={accordionRef}
          className="max-w-4xl"
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item border-b border-gray-200"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span className="font-serif text-lg lg:text-xl text-navy group-hover:text-gold transition-colors pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-navy flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <p className="body-text text-gray">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

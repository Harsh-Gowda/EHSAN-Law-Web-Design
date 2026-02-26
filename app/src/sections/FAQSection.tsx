import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: 'Do I need an immigration attorney?',
    answer: 'While not required, an attorney can help you navigate complex laws, avoid costly mistakes, and improve your chances of success. We offer a free initial consultation to discuss your case and determine how we can help.',
  },
  {
    question: 'How long will my case take?',
    answer: 'Processing times vary significantly depending on the type of case, current backlogs, and government processing speeds. During your consultation, we will provide a realistic timeline based on your specific situation.',
  },
  {
    question: 'What documents should I prepare?',
    answer: 'Required documents depend on your case type. Generally, you will need identification, proof of relationships, financial documents, and case-specific forms. We provide a comprehensive checklist after your initial consultation.',
  },
  {
    question: 'Can you help if I am in removal proceedings?',
    answer: 'Yes. We represent clients in immigration court, including bond hearings, cancellation of removal, asylum claims, and appeals. Time is critical — contact us immediately if you or a loved one is detained or has a court date.',
  },
  {
    question: 'Do you offer payment plans?',
    answer: 'Yes, we understand that legal fees can be a burden. We offer flexible payment plans for many case types and accept credit cards. During your consultation, we will discuss fees and payment options transparently.',
  },
  {
    question: 'Do you work with clients outside Washington State?',
    answer: 'Absolutely. Immigration law is federal, and we represent clients nationwide. We use video conferencing and secure document sharing to work with clients across the country.',
  },
];

type FAQItemProps = {
  faq: { question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
};

const FAQItem = ({ faq, isOpen, onToggle }: FAQItemProps) => {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={onToggle}
        className="w-full py-5 flex items-center justify-between text-left gap-4 group"
      >
        <span className={`font-serif text-base lg:text-lg transition-colors ${isOpen ? 'text-[#C69A2C]' : 'text-navy group-hover:text-[#C69A2C]'}`}>
          {faq.question}
        </span>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#C69A2C] border-[#C69A2C] rotate-45' : 'border-gray-300 group-hover:border-[#C69A2C]'
            }`}
        >
          <Plus className={`w-3.5 h-3.5 ${isOpen ? 'text-white' : 'text-navy group-hover:text-[#C69A2C]'}`} />
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-60 pb-5' : 'max-h-0'}`}>
        <p className="text-gray text-sm leading-relaxed">{faq.answer}</p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headRef.current,
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
      gsap.fromTo(
        [leftRef.current, rightRef.current],
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: leftRef.current,
            start: 'top 78%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const leftFaqs = faqs.slice(0, 3);
  const rightFaqs = faqs.slice(3);

  return (
    <section ref={sectionRef} className="bg-white py-16 md:py-28 lg:py-36">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">

        {/* Header */}
        <div ref={headRef} className="mb-14 md:mb-20">
          <span className="caption-text text-[#C69A2C] block mb-4">FAQ</span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="heading-lg text-navy leading-tight max-w-md">
              Common Questions, Clear Answers
            </h2>
            <p className="body-text text-gray max-w-xs">
              Still have questions? We are happy to help — schedule a free consultation anytime.
            </p>
          </div>
        </div>

        {/* Two-column accordion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-14 lg:gap-20">
          <div ref={leftRef}>
            {leftFaqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
          <div ref={rightRef}>
            {rightFaqs.map((faq, i) => (
              <FAQItem
                key={i + 3}
                faq={faq}
                isOpen={openIndex === i + 3}
                onToggle={() => setOpenIndex(openIndex === i + 3 ? null : i + 3)}
              />
            ))}
          </div>
        </div>

        {/* CTA strip */}
        <div className="mt-16 bg-[#F4F6F8] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-navy text-xl mb-1">Still have questions?</h3>
            <p className="text-gray text-sm">Our team is ready to answer any questions about your case.</p>
          </div>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 bg-[#0B1A2F] text-white px-6 py-3.5 rounded-full text-sm font-medium hover:bg-[#0B1A2F]/80 transition-colors whitespace-nowrap"
          >
            Get free consultation &rarr;
          </button>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;

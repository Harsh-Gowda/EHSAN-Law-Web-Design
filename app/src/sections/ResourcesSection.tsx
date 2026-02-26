import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { blogPosts } from '../lib/blogData';

gsap.registerPlugin(ScrollTrigger);

const ResourcesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(headingRef.current,
        { y: 24, opacity: 0 },
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

      // Cards animation
      const cards = cardsRef.current?.querySelectorAll('.resource-card');
      if (cards) {
        gsap.fromTo(cards,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-cream py-12 md:py-24 lg:py-32"
    >
      <div className="px-6 md:px-12 lg:px-[6vw]">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-12 lg:mb-16">
          <div ref={headingRef}>
            <h2 className="heading-lg text-navy mb-4">
              Resources & Insights
            </h2>
            <p className="body-text text-gray max-w-2xl">
              Stay informed with the latest immigration news, policy updates, and practical guides.
            </p>
          </div>
          <button
            onClick={() => navigate('/blog')}
            className="inline-flex items-center gap-2 text-navy font-bold hover:text-gold transition-colors link-underline group whitespace-nowrap"
          >
            View All Articles
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Resource Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {blogPosts.slice(0, 3).map((post, index) => (
            <article
              key={index}
              onClick={() => navigate(`/blog/${post.id}`)}
              className="resource-card bg-white rounded-3xl overflow-hidden card-shadow card-hover cursor-pointer group"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-medium text-gold uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                </div>

                <h3 className="font-serif text-xl text-navy mb-3 group-hover:text-gold transition-colors">
                  {post.title}
                </h3>

                <p className="text-sm text-gray mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <span className="inline-flex items-center gap-2 text-navy text-sm font-medium group-hover:text-gold transition-colors">
                  Read more
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;

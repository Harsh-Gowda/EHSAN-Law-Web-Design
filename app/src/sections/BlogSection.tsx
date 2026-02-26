import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Calendar, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { blogPosts } from '../lib/blogData';

const BlogSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const categories = ['All', 'Guides', 'News', 'Family Immigration', 'Employment', 'Citizenship', 'Asylum'];

    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.blog-card', {
                opacity: 0,
                y: 20,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power2.out',
            });
        }, sectionRef);
        return () => ctx.revert();
    }, [activeCategory, searchQuery]);

    return (
        <section ref={sectionRef} className="bg-cream py-16 md:py-24">
            <div className="container mx-auto px-6 md:px-12">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="heading-lg text-navy mb-4">Resources & Insights</h1>
                    <p className="body-text text-gray max-w-2xl mb-10">
                        Expert Perspectives on U.S. Immigration Law, Policy Updates, and Practical Guides for Your Journey.
                    </p>

                    {/* Search and Filter */}
                    <div className="flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center">
                        {/* Categories */}
                        <div className="flex flex-wrap gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat
                                        ? 'bg-navy text-white shadow-md'
                                        : 'bg-white text-navy hover:bg-white/80 border border-navy/10'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Search Bar */}
                        <div className="relative w-full lg:w-80">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-navy/10 focus:outline-none focus:ring-2 focus:ring-gold/20 text-sm"
                            />
                        </div>
                    </div>
                </div>

                {/* Blog Grid */}
                {filteredPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {filteredPosts.map((post, index) => (
                            <article
                                key={index}
                                onClick={() => navigate(`/blog/${post.id}`)}
                                className="blog-card bg-white rounded-3xl overflow-hidden card-shadow card-hover group cursor-pointer"
                            >
                                {/* Image */}
                                <div className="h-56 overflow-hidden relative">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold text-navy uppercase tracking-widest">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8">
                                    <div className="flex items-center gap-2 text-xs text-gray mb-4">
                                        <Calendar className="w-3 h-3" />
                                        {post.date}
                                    </div>
                                    <h3 className="font-serif text-2xl text-navy mb-4 group-hover:text-gold transition-colors leading-tight">
                                        {post.title}
                                    </h3>
                                    <p className="text-sm text-gray mb-6 line-clamp-3 leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            navigate(`/blog/${post.id}`);
                                        }}
                                        className="inline-flex items-center gap-2 text-navy text-sm font-semibold group-hover:gap-4 transition-all"
                                    >
                                        Read Full Article
                                        <ArrowRight className="w-4 h-4 text-gold" />
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-navy/20 mb-16">
                        <p className="text-gray italic">No articles found matching your criteria.</p>
                        <button
                            onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                            className="mt-4 text-gold font-medium hover:underline"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}

                {/* Pagination (Simple Design) */}
                <div className="flex justify-center items-center gap-4">
                    <button className="p-3 rounded-full border border-navy/10 text-navy hover:bg-navy hover:text-white transition-all disabled:opacity-30" disabled>
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <span className="text-sm font-medium text-navy">Page 1 of 1</span>
                    <button className="p-3 rounded-full border border-navy/10 text-navy hover:bg-navy hover:text-white transition-all disabled:opacity-30" disabled>
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;

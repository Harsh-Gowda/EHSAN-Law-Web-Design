import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import type { BlogPost } from '../lib/blogData';

interface BlogPostSectionProps {
    post: BlogPost;
}

const BlogPostSection = ({ post }: BlogPostSectionProps) => {
    const navigate = useNavigate();

    return (
        <section className="bg-cream py-16 md:py-24">
            <div className="container mx-auto px-6 md:px-12">
                {/* Back Button */}
                <button
                    onClick={() => navigate('/blog')}
                    className="inline-flex items-center gap-2 text-navy hover:text-gold transition-colors mb-12 group"
                >
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    <span className="text-sm font-medium">Back to Articles</span>
                </button>

                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="mb-10">
                        <div className="flex flex-wrap items-center gap-4 mb-6">
                            <span className="px-3 py-1 bg-white rounded-full text-[10px] font-bold text-navy uppercase tracking-widest border border-navy/10">
                                {post.category}
                            </span>
                            <div className="flex items-center gap-4 text-xs text-gray">
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    {post.date}
                                </span>
                                <span className="flex items-center gap-1">
                                    <User className="w-3 h-3" />
                                    {post.author}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    {post.readTime}
                                </span>
                            </div>
                        </div>
                        <h1 className="heading-xl text-navy mb-6 leading-tight">{post.title}</h1>
                        <p className="body-text text-gray text-lg italic">{post.excerpt}</p>
                    </div>

                    {/* Featured Image */}
                    <div className="rounded-3xl overflow-hidden card-shadow mb-12 aspect-[16/9]">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover img-film-grade"
                        />
                    </div>

                    {/* Content */}
                    <div
                        className="prose prose-lg prose-navy max-w-none 
              [&>p]:body-text [&>p]:mb-6 [&>p]:text-gray/90
              [&>h3]:heading-md [&>h3]:text-navy [&>h3]:mt-10 [&>h3]:mb-4
              [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul]:space-y-2
              [&>ul>li]:body-text [&>ul>li]:text-gray/90
              [&>strong]:text-navy [&>strong]:font-bold"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Footer CTA */}
                    <div className="mt-20 p-8 md:p-12 bg-navy rounded-3xl card-shadow border border-white/10 text-center">
                        <h2 className="heading-md text-white mb-4">Need personalized legal advice?</h2>
                        <p className="text-white/80 mb-8 max-w-xl mx-auto">
                            Our experienced team is here to help you navigate your specific immigration journey with clarity and care.
                        </p>
                        <button
                            onClick={() => navigate('/contact')}
                            className="bg-gold text-navy px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
                        >
                            Schedule a Consultation
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogPostSection;

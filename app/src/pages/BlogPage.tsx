import BlogSection from '../sections/BlogSection';
import SEO from '../components/SEO';

const BlogPage = () => {
    return (
        <>
            <SEO
                title="Legal Resources & Insights"
                description="Expert perspectives on U.S. immigration law, policy updates, and practical guides to help you navigate your legal journey."
                canonical="/blog"
            />
            <div className="pt-20">
                <BlogSection />
            </div>
        </>
    );
};

export default BlogPage;

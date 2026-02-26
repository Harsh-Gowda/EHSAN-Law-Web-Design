import { useParams, Navigate } from 'react-router-dom';
import { blogPosts } from '../lib/blogData';
import BlogPostSection from '../sections/BlogPostSection';
import SEO from '../components/SEO';

const BlogPostPage = () => {
    const { id } = useParams<{ id: string }>();
    const post = blogPosts.find(p => p.id === id);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    return (
        <>
            <SEO
                title={post.title}
                description={post.excerpt}
                canonical={`/blog/${post.id}`}
            />
            <div className="pt-20">
                <BlogPostSection post={post} />
            </div>
        </>
    );
};

export default BlogPostPage;

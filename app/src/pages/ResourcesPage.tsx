import ResourcesSection from '../sections/ResourcesSection';
import SEO from '../components/SEO';

const ResourcesPage = () => {
    return (
        <>
            <SEO
                title="Immigration Resources"
                description="Helpful resources, guides, and links to assist you with your immigration journey."
                canonical="/resources"
            />
            <div className="pt-20">
                <ResourcesSection />
            </div>
        </>
    );
};

export default ResourcesPage;

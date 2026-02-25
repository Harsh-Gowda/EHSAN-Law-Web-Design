import AboutSection from '../sections/AboutSection';
import SEO from '../components/SEO';

const AboutPage = () => {
    return (
        <>
            <SEO
                title="About Us"
                description="Learn about EHSAN Law's mission and our dedication to providing exceptional immigration legal services."
                canonical="/about"
            />
            <div style={{ paddingTop: '80px' }}>
                <AboutSection />
            </div>
        </>
    );
};

export default AboutPage;

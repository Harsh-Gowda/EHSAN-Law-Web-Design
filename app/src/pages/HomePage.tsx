import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import ServicesOverview from '../sections/ServicesOverview';
import AttorneySection from '../sections/AttorneySection';
import TestimonialsSection from '../sections/TestimonialsSection';
import FAQSection from '../sections/FAQSection';
import ContactSection from '../sections/ContactSection';
import SEO from '../components/SEO';

const HomePage = () => {
    return (
        <>
            <SEO
                title="Immigration Attorney"
                description="EHSAN Law provides expert legal services for family immigration, business immigration, deportation defense, and asylum."
            />
            <HeroSection />
            <AboutSection />
            <ServicesOverview />
            <AttorneySection />
            <TestimonialsSection />
            <FAQSection />
            <ContactSection />
        </>
    );
};

export default HomePage;

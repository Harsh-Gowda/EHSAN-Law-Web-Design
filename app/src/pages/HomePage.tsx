import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import ServicesOverview from '../sections/ServicesOverview';
import FamilyImmigration from '../sections/FamilyImmigration';
import BusinessImmigration from '../sections/BusinessImmigration';
import DeportationDefense from '../sections/DeportationDefense';
import CitizenshipSection from '../sections/CitizenshipSection';
import AsylumSection from '../sections/AsylumSection';
import AttorneySection from '../sections/AttorneySection';
import TestimonialsSection from '../sections/TestimonialsSection';
import FAQSection from '../sections/FAQSection';
import ResourcesSection from '../sections/ResourcesSection';
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
            <FamilyImmigration />
            <BusinessImmigration />
            <DeportationDefense />
            <CitizenshipSection />
            <AsylumSection />
            <AttorneySection />
            <TestimonialsSection />
            <FAQSection />
            <ResourcesSection />
            <ContactSection />
        </>
    );
};

export default HomePage;

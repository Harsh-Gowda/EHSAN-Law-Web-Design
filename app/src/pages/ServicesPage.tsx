import ServicesOverview from '../sections/ServicesOverview';
import FamilyImmigration from '../sections/FamilyImmigration';
import BusinessImmigration from '../sections/BusinessImmigration';
import DeportationDefense from '../sections/DeportationDefense';
import CitizenshipSection from '../sections/CitizenshipSection';
import AsylumSection from '../sections/AsylumSection';
import SEO from '../components/SEO';

const ServicesPage = () => {
    return (
        <>
            <SEO
                title="Our Immigration Services"
                description="Explore our comprehensive immigration legal services, including family and business immigration, deportation defense, and asylum."
                canonical="/services"
            />
            <div style={{ paddingTop: '80px' }}>
                <ServicesOverview />
                <FamilyImmigration />
                <BusinessImmigration />
                <DeportationDefense />
                <CitizenshipSection />
                <AsylumSection />
            </div>
        </>
    );
};

export default ServicesPage;

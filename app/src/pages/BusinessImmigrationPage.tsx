import BusinessImmigration from '../sections/BusinessImmigration';
import SEO from '../components/SEO';

const BusinessImmigrationPage = () => {
    return (
        <>
            <SEO
                title="Business Immigration Services"
                description="Expert guidance for business visas, employment-based immigration, and corporate compliance."
                canonical="/services/business-immigration"
            />
            <div style={{ paddingTop: '80px' }}>
                <BusinessImmigration />
            </div>
        </>
    );
};

export default BusinessImmigrationPage;

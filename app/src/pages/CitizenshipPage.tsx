import CitizenshipSection from '../sections/CitizenshipSection';
import SEO from '../components/SEO';

const CitizenshipPage = () => {
    return (
        <>
            <SEO
                title="Citizenship and Naturalization"
                description="Fulfill your dream of becoming a U.S. citizen. We guide you through the entire naturalization process."
                canonical="/services/citizenship"
            />
            <div style={{ paddingTop: '80px' }}>
                <CitizenshipSection />
            </div>
        </>
    );
};

export default CitizenshipPage;

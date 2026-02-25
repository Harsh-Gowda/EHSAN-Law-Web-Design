import AttorneySection from '../sections/AttorneySection';
import SEO from '../components/SEO';

const AttorneyPage = () => {
    return (
        <>
            <SEO
                title="Our Attorney - Asif Ehsan"
                description="Learn about Asif Ehsan, our managing attorney with years of experience in U.S. immigration law."
                canonical="/attorney"
            />
            <div style={{ paddingTop: '80px' }}>
                <AttorneySection />
            </div>
        </>
    );
};

export default AttorneyPage;

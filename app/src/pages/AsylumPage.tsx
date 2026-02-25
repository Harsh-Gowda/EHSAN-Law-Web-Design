import AsylumSection from '../sections/AsylumSection';
import SEO from '../components/SEO';

const AsylumPage = () => {
    return (
        <>
            <SEO
                title="Asylum and Humanitarian Relief"
                description="Seeking protection? We provide compassionate legal help for asylum seekers and humanitarian parole."
                canonical="/services/asylum"
            />
            <div style={{ paddingTop: '80px' }}>
                <AsylumSection />
            </div>
        </>
    );
};

export default AsylumPage;

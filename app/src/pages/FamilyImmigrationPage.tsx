import FamilyImmigration from '../sections/FamilyImmigration';
import SEO from '../components/SEO';

const FamilyImmigrationPage = () => {
    return (
        <>
            <SEO
                title="Family Immigration Services"
                description="Navigate family immigration with ease. We help with green cards, family visas, and reunification."
                canonical="/services/family-immigration"
            />
            <div style={{ paddingTop: '80px' }}>
                <FamilyImmigration />
            </div>
        </>
    );
};

export default FamilyImmigrationPage;

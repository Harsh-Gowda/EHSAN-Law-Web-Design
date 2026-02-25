import DeportationDefense from '../sections/DeportationDefense';
import SEO from '../components/SEO';

const DeportationDefensePage = () => {
    return (
        <>
            <SEO
                title="Deportation Defense"
                description="Vigorous representation in removal proceedings. We fight to keep families together."
                canonical="/services/deportation-defense"
            />
            <div style={{ paddingTop: '80px' }}>
                <DeportationDefense />
            </div>
        </>
    );
};

export default DeportationDefensePage;

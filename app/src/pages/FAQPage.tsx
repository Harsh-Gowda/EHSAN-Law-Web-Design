import FAQSection from '../sections/FAQSection';
import SEO from '../components/SEO';

const FAQPage = () => {
    return (
        <>
            <SEO
                title="Frequently Asked Questions"
                description="Find answers to common questions about US immigration, visas, and legal procedures."
                canonical="/faq"
            />
            <div className="pt-20">
                <FAQSection />
            </div>
        </>
    );
};

export default FAQPage;

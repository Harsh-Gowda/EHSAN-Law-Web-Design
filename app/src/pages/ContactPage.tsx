import ContactSection from '../sections/ContactSection';
import SEO from '../components/SEO';

const ContactPage = () => {
    return (
        <>
            <SEO
                title="Contact Us"
                description="Get in touch with EHSAN Law for a free consultation. We are here to help with your immigration legal needs."
                canonical="/contact"
            />
            <div className="pt-20">
                <ContactSection />
            </div>
        </>
    );
};

export default ContactPage;

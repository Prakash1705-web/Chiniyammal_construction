import ContactForm from "../components/contacts/contact_form";
import ContactHero from "../components/contacts/contact_hero";
import ContactInfo from "../components/contacts/contact_info";

const Contact = () => {
  return (
    <>
      <ContactHero />
      <section className="contact-section">
        <div className="section-container">
          <div className="contact-grid">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

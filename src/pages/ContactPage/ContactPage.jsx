import PageHeader from "@/component/PageHeader/PageHeader";
import FeatureSection from "@/component/FeatureSection/FeatureSection";
import ContactForm from "@/component/ContactForm/ContactForm";

import "./style.scss";

const ContactPage = () => {
  return (
    <div>
      <PageHeader />
      <ContactForm />
      <FeatureSection />
    </div>
  );
};

export default ContactPage;

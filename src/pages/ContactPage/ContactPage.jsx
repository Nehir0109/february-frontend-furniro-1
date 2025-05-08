import PageHeader from "../../component/PageHeader/PageHeader";
import ContactForm from "../../component/ContactForm/ContactForm";
import FeatureSection from "../../Components/FeatureSection/FeatureSection";
import "./style.scss";

const ContactPage = () => {
  return (
    <div>
      <PageHeader />
      <ContactForm />
      <FeatureSection/>
    </div>
  );
};

export default ContactPage;

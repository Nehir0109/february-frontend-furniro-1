import CheckoutComponent from "../../component/ChecoutComponent/Checkout";
import PageHeader from "../../component/PageHeader/PageHeader";
import FeatureSection from "../../Components/FeatureSection/FeatureSection";

import "./style.scss";
const CheckoutPage = () => {
  return (
    <div>
      <PageHeader />
      <CheckoutComponent />
      <FeatureSection />
    </div>
  );
};

export default CheckoutPage;

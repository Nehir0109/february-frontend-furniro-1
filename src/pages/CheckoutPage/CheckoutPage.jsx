<<<<<<< HEAD
import "./style.scss";
import FeatureSection from "../../Components/FeatureSection/FeatureSection";

const CheckoutPage = () => {
  return <div>CheckoutPage
     <FeatureSection/>
  </div>;
};

export default CheckoutPage;
=======
import CheckoutComponent from "../../component/ChecoutComponent/Checkout";
import PageHeader from "../../component/PageHeader/PageHeader";
import "./style.scss";
const CheckoutPage = () => {
  return (
    <div>
      <PageHeader />
      <CheckoutComponent />
    </div>
  );
};

export default CheckoutPage;
>>>>>>> master

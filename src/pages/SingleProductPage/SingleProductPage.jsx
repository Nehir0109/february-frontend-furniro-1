import SingleProductMoreInfoSection from "@/component/SingleProductMoreInfoSection/SingleProductMoreInfo";
import "./style.scss";
import SingleProductNavigation from "../../component/SingleProductNavigation/SingleProductNavigation";
const SingleProductPage = () => {
  return (
    <div>
      <SingleProductNavigation />
      <SingleProductMoreInfoSection />
    </div>
  );
};

export default SingleProductPage;

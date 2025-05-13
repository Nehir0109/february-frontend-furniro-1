import SingleProductMoreInfoSection from "@/component/SingleProductMoreInfoSection/SingleProductMoreInfo";
import "./style.scss";
import SingleProductNavigation from "../../component/SingleProductNavigation/SingleProductNavigation";
import { RelatedProducts } from "../../component/RelatedProducts/RelatedProducts";
const SingleProductPage = () => {
  return (
    <div>
      <SingleProductNavigation />
      <SingleProductMoreInfoSection />
      <RelatedProducts />
    </div>
  );
};

export default SingleProductPage;

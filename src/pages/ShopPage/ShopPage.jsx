<<<<<<< HEAD
import FeatureSection from "../../Components/FeatureSection/FeatureSection";
import "./style.scss";


const ShopPage = () => {
  return <div>
    <FeatureSection/>
  </div>;

};

export default ShopPage;
=======
import PageHeader from "@/component/PageHeader/PageHeader";
import AllProducts from "@/component/AllProductsComponent/AllProducts";
import "./style.scss";

const ShopPage = () => {
  return (
    <div>
      <PageHeader />
      <AllProducts showTitle={false} showSeeMore={false} showPagination={true} />
    </div>
  );
};

export default ShopPage;
>>>>>>> master

import PageHeader from "@/component/PageHeader/PageHeader";
import AllProducts from "@/component/AllProductsComponent/AllProducts";
import "./style.scss";
import TopFilter from "../../component/TopFilterComponent/TopFilter";

const ShopPage = () => {
  return (
    <div>
      <PageHeader />
      <TopFilter />
      <AllProducts showTitle={false} showSeeMore={false} showPagination={true} />
    </div>
  );
};

export default ShopPage;

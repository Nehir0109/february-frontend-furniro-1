import { useState, useEffect,useCallback  } from "react";
import style from "./AllProducts.module.scss";
import Filter from "../FilterComponent/Filter";
import { OurProductComponent } from "../OurProductComponent/OurProductComponent";
import { fetchProducts } from "@/Utils/fetchProducts";

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showAll, setShowAll] = useState(false); 

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts();
      if (data) {
        setAllProducts(data);
        setFilteredProducts(data.slice(0, 12));
      } else {
        console.error("Veri çekilemedi, API'den gelen veri boş.");
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = useCallback((filters) => {
    let filtered = allProducts;
  
    if (Object.keys(filters).length !== 0) {
      filtered = allProducts.filter((product) => {
        const roomFilters = filters[product.room];
        return roomFilters ? roomFilters.includes(product.type) : false;
      });
      console.log(filtered);
    }
  
    if (showAll) {
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(filtered.slice(0, 12));
    }
  }, [allProducts, showAll]);
  

  const handleSeeMoreClick = () => {
    if (showAll) {
      setFilteredProducts(filteredProducts.slice(0, 12)); 
    } else {
      setFilteredProducts(allProducts); 
    }
    setShowAll(!showAll); 
  };

  return (
    <div>
      <h1 className={style.title}>Our Products</h1>
      <div className={style.allProductsContainer}>
        <div className={style.leftContainer}>
          <Filter onFilterChange={handleFilterChange} />
          <div>{/* Buraya Best Seller gelecek*/}</div>
        </div>
        <OurProductComponent products={filteredProducts} />
      </div>
      <button className={style.showAllBtn} onClick={handleSeeMoreClick}>
        {showAll ? "See Less" : "See More"}
      </button>
    </div>
  );
};

export default AllProducts;

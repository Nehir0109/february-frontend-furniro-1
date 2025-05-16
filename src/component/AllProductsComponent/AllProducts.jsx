import { useState, useEffect, useCallback } from "react";
import style from "./AllProducts.module.scss";
import Filter from "../FilterComponent/Filter";
import { OurProductComponent } from "../OurProductComponent/OurProductComponent";
import { fetchProducts } from "@/Utils/fetchProducts";
import { Spin } from "antd";
import PropTypes from "prop-types";
import BestSellerCard from "../BestSellerCard";
import { useSearchParams } from "react-router-dom";

const AllProducts = ({ showTitle, showSeeMore, showPagination }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const firstFiveBest = allProducts.slice(0, 4);
  const [searchParams] = useSearchParams();
  const ratings = searchParams.get("ratings");
  const price = searchParams.get("price");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts();
        if (data) {
          setAllProducts(data);
          setFilteredProducts(data);
        } else {
          console.error("Veri çekilemedi, API'den gelen veri boş.");
        }
      } catch (err) {
        console.error("Hata oluştu:", err);
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = useCallback(
    (filters) => {
      let filtered = allProducts;

      if (Object.keys(filters).length !== 0) {
        filtered = allProducts.filter((product) => {
          const roomFilters = filters[product.room];
          return roomFilters ? roomFilters.includes(product.type) : false;
        });
      }

      if (price) {
        const maxPrice = parseInt(price, 10);
        filtered = filtered.filter((product) => product.price <= maxPrice);
      }

      if (ratings) {
        const ratingList = ratings.split(",").map(Number);
        filtered = filtered.filter((product) =>
          ratingList.includes(Math.round(product.rating))
        );
      }

      setCurrentPage(1);
      setFilteredProducts(filtered);
    },
    [allProducts, price, ratings]
  );

  useEffect(() => {
    handleFilterChange({});
  }, [searchParams, allProducts]);

  const handleSeeMoreClick = () => {
    setShowAll((prev) => !prev);
  };

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = showAll
    ? filteredProducts
    : filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={style.allProducts}>
      {showTitle && <h1 className={style.title}>Our Products</h1>}
      <div className={style.allProductsContainer}>
        <div className={style.leftContainer}>
          <Filter onFilterChange={handleFilterChange} />
          <div className={style.bestSellerCard}>
            <h3 className={style.bestTitle}>Best Sellers</h3>
            {firstFiveBest.map((item, index) => (
              <BestSellerCard product={item} key={index} />
            ))}
          </div>
        </div>
        {filteredProducts.length === 0 ? (
          <div className={style.noProductsMessage}>
            Sorry, no products match your filter criteria.
          </div>
        ) : currentProducts.length > 0 ? (
          <OurProductComponent products={currentProducts} />
        ) : (
          <Spin
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              width: "100%",
            }}
            size="large"
          />
        )}
      </div>
      {showSeeMore && (
        <button className={style.showAllBtn} onClick={handleSeeMoreClick}>
          {showAll ? "See Less" : "See More"}
        </button>
      )}

      {showPagination && totalPages > 1 && (
        <div className={style.paginationContainer}>
          {currentPage > 1 && (
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className={style.pageBtn}
            >
              Prev
            </button>
          )}

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={
                currentPage === index + 1
                  ? style.activePage
                  : style.pageBtn
              }
            >
              {index + 1}
            </button>
          ))}

          {currentPage < totalPages && (
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className={style.pageBtn}
            >
              Next
            </button>
          )}
        </div>
      )}
    </div>
  );
};

AllProducts.propTypes = {
  showTitle: PropTypes.bool,
  showSeeMore: PropTypes.bool,
  showPagination: PropTypes.bool,
};

export default AllProducts;
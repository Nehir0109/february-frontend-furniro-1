import { useEffect, useState } from "react";
import style from "./Modal.module.scss";
import clsImage from "./../../assets/ShoppingCard/basketIcon.svg";
import basketIcon from "./../../assets/Navbar/closeModal.svg";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
const Modal = ({ closeModal, type }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (type === "shop") {
      const storedBasket = localStorage.getItem("basket");
      if (storedBasket) {
        setItems(JSON.parse(storedBasket));
      }
    } else if (type === "favorites") {
      const storedFavorites = localStorage.getItem("favorites");
      if (storedFavorites) {
        setItems(JSON.parse(storedFavorites));
      }
    }
  }, [type]);

  const deleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    if (type === "shop") {
      localStorage.setItem("basket", JSON.stringify(updatedItems));
    } else if (type === "favorites") {
      localStorage.setItem("favorites", JSON.stringify(updatedItems));
    }
  };
  const navigate = useNavigate();
  const handleButtonClick = (buttonType) => {
    switch (buttonType) {
      case "cart":
        navigate("/cart");
        break;
      case "checkout":
        navigate("/checkout");
        break;
      case "compare":
        navigate("/product/:id");
        break;
      case "seeMore":
        navigate("/");
        break;
      default:
        "/";
        break;
    }
  };

  const emptyText = type === "shop" ? "Cart is empty" : "Favorites is empty";
  if (type === "shop" || type === "favorites") {
    return (
      <div className={style.ModalContainer} onClick={closeModal}>
        <div className={style.ModalSidebar} onClick={(e) => e.stopPropagation()}>
          <div>
            <div className={style.topContainer}>
              <h1>{type === "shop" ? "Shopping Cart" : "Favorites"}</h1>

              <button onClick={closeModal}>
                {type === "shop" ? (
                  <button onClick={() => goToShopPage()}>
                    <img src={basketIcon} alt="basketIcon" />
                  </button>
                ) : (
                  ""
                )}
              </button>
            </div>
            <hr />
            <div className={style.productsOfBasket}>
              {items.length > 0 ? (
                items.map((item, index) => (
                  <div key={index} className={style.product}>
                    <img
                      className={style.productImage}
                      src={item.images?.[0] || ""}
                      alt="Product"
                    />
                    <div className={style.productContent}>
                      <h6>{item.name}</h6>
                      {type === "shop" && (
                        <div className={style.orderItem}>
                          <span>1</span> <span>×</span>
                          <p>Rs.{item.price}</p>
                        </div>
                      )}
                    </div>
                    <button onClick={() => deleteItem(item.id)}>
                      <img src={clsImage} alt="Delete" />
                    </button>
                  </div>
                ))
              ) : (
                <p>{emptyText}</p>
              )}
            </div>
          </div>
          <div>
            {type === "shop" && (
              <div className={style.subtotalContainer}>
                <h6 className={style.subTotal}>Subtotal</h6>
                <span>fiyat</span>
              </div>
            )}
            <div className={style.buttonsContainer}>
              {type === "shop" ? (
                <>
                  <button onClick={() => handleButtonClick("cart")} className={style.btn}>
                    Cart
                  </button>
                  <button
                    onClick={() => handleButtonClick("checkout")}
                    className={style.btn}
                  >
                    Checkout
                  </button>
                  <button
                    onClick={() => handleButtonClick("compare")}
                    className={style.btn}
                  >
                    Compare
                  </button>
                </>
              ) : (
                <button
                  onClick={() => handleButtonClick("seeMore")}
                  className={style.btn}
                >
                  See more
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
};
Modal.propTypes = {
  closeModal: PropTypes.func.isRequired, // closeModal fonksiyonu zorunlu ve fonksiyon tipi olmalı
  type: PropTypes.string.isRequired, // type prop'u zorunlu ve string tipi olmalı
};
export default Modal;

import { useEffect, useState } from "react";
import style from "./Modal.module.scss";
import clsImage from "@/assets/ShoppingCard/basketIcon.svg";
import basketIcon from "@/assets/Navbar/closeModal.svg";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { localStorageUtility } from "@/Utils/localStorageUtility";

const Modal = ({ closeModal, type }) => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const key = type === "shop" ? "basket" : "favorites";
    const storedItems = localStorageUtility.get(key);
    setItems(storedItems || []);
  }, [type]);

  const deleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);

    const key = type === "shop" ? "basket" : "favorites";
    localStorage.setItem(key, JSON.stringify(updatedItems));
  };

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
      default:
        navigate("/");
        break;
    }
  };

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0,
  );

  const emptyText = type === "shop" ? "Cart is empty" : "Favorites is empty";

  if (type === "shop" || type === "favorites") {
    return (
      <div className={style.ModalContainer} onClick={closeModal}>
        <div className={style.ModalSidebar} onClick={(e) => e.stopPropagation()}>
          <div>
            <div className={style.topContainer}>
              <h1>{type === "shop" ? "Shopping Cart" : "Favorites"}</h1>
              <button onClick={() => handleButtonClick("cart")}>
                {" "}
                {type === "shop" && <img src={basketIcon} alt="basketIcon" />}
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
                          <span>{item.quantity || 1}</span> <span>×</span>
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
                <span>Rs. {subtotal.toFixed(2)}</span>
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
  closeModal: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default Modal;

import styles from "./Checkout.module.scss";
import { useEffect, useState } from "react";
import { localStorageUtility } from "@/Utils/localStorageUtility";
import calculateTotalPrice from "@/Utils/calculateTotalPrice";

const formFields = [
  { label: "Company Name (Optional)", name: "companyName", type: "text" },
  {
    label: "Country / Region",
    name: "countryRegion",
    type: "select",
    options: ["Sri Lanka", "Türkiye", "Germany", "USA"],
  },
  { label: "Street Address", name: "streetAddress", type: "text" },
  { label: "Town / City", name: "townCity", type: "text" },
  { label: "Province", name: "province", type: "select", options: ["Western Province"] },
  { label: "ZIP Code", name: "zipCode", type: "text" },
  { label: "Phone", name: "phone", type: "text" },
  { label: "Email Address", name: "emailAddress", type: "email" },
  {
    label: "Additional Information",
    name: "additionalInformation",
    type: "text",
    placeholder: "Additional information",
  },
];

const CheckoutComponent = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = localStorageUtility.get("cart");
    if (storedCart) {
      setCartItems(storedCart);
    }
  }, []);
  const total = calculateTotalPrice(cartItems);
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h2 className={styles.heading}>Billing details</h2>
        <form className={styles.formLayout}>
          <div className={styles.row}>
            <div className={styles.group}>
              <label htmlFor="firstName">First Name</label>
              <input id="firstName" type="text" />
            </div>
            <div className={styles.group}>
              <label htmlFor="lastName">Last Name</label>
              <input id="lastName" type="text" />
            </div>
          </div>

          {formFields.map((field) => (
            <div key={field.name} className={styles.group}>
              <label htmlFor={field.name}>{field.label}</label>
              {field.type === "select" ? (
                <select id={field.name}>
                  {field.options?.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              ) : (
                <input
                  id={field.name}
                  type={field.type}
                  placeholder={field.placeholder || ""}
                />
              )}
            </div>
          ))}
        </form>
      </div>
      <div className={styles.summary}>
        <div className={styles.summaryHeader}>
          <div className={styles.summaryTitle}>
            <h2>Product</h2>
            <h2>Subtotal</h2>
          </div>

          {cartItems.map((item) => (
            <div key={item.id} className={styles.summaryItem}>
              <div>
                <span className={styles.productName}>{item.name}</span>
                <span> × {item.quantity}</span>
              </div>
              <span>${item.price * item.quantity}</span>
            </div>
          ))}

          <div className={styles.summaryItem}>
            <span>Subtotal</span>
            <span>${total}</span>
          </div>

          <div className={styles.summaryItem}>
            <span>Total</span>
            <strong>${total}</strong>
          </div>
        </div>

        <div className={styles.payment}>
          <label>
            <input type="radio" name="payment" defaultChecked />
            Direct Bank Transfer
          </label>
          <p className={styles.desc}>
            Make your payment directly into our bank account. Please use your Order ID as
            the payment reference. Your order will not be shipped until the funds have
            cleared in our account.
          </p>
        </div>

        <div className={styles.radio}>
          <label>
            <input type="radio" name="payment" />
            Direct Bank Transfer
          </label>
          <label>
            <input type="radio" name="payment" />
            Cash on Delivery
          </label>
        </div>

        <p className={styles.note}>
          Your personal data will be used to support your experience throughout this
          website, to manage access to your account, and for other purposes described in
          our <a href="#">privacy policy</a>.
        </p>
        <button className={styles.orderBtn}>Place order</button>
      </div>
    </div>
  );
};

export default CheckoutComponent;

import React from "react";
import styles from "./Checkout.module.scss";

const CheckoutComponent = () => {
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

          <div className={styles.group}>
            <label htmlFor="company">Company Name (Optional)</label>
            <input id="company" type="text" />
          </div>

          <div className={styles.group}>
            <label htmlFor="country">Country / Region</label>
            <select id="country">
              <option>Sri Lanka</option>
              <option>Türkiye</option>
            </select>
          </div>

          <div className={styles.group}>
            <label htmlFor="street">Street address</label>
            <input id="street" type="text" />
          </div>

          <div className={styles.group}>
            <label htmlFor="city">Town / City</label>
            <input id="city" type="text" />
          </div>

          <div className={styles.group}>
            <label htmlFor="province">Province</label>
            <select id="province">
              <option>Western Province</option>
            </select>
          </div>

          <div className={styles.group}>
            <label htmlFor="zip">ZIP code</label>
            <input id="zip" type="text" />
          </div>

          <div className={styles.group}>
            <label htmlFor="phone">Phone</label>
            <input id="phone" type="text" />
          </div>

          <div className={styles.group}>
            <label htmlFor="email">Email address</label>
            <input id="email" type="email" />
          </div>

          <div className={styles.group}>
            <label htmlFor="additionalInfo">Additional Information</label>
            <input id="additionalInfo" type="text" placeholder="Additional information" />
          </div>
        </form>
      </div>

      <div className={styles.summary}>
        <div className={styles.summaryHeader}>
          <div className={styles.summaryTitle}>
            <h2>Product</h2>
            <h2>Subotal</h2>
          </div>

          <div className={styles.summaryItem}>
            <div>
              <span className={styles.productName}>Agggood sofa</span>
              <span> × 1</span>
            </div>

            <span>$250,000</span>
          </div>

          <div className={styles.summaryItem}>
            <span>Subtotal</span>
            <span>$250,000</span>
          </div>

          <div className={styles.summaryItem}>
            <span>Total</span>
            <strong>$250,000</strong>
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

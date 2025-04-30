import style from "./OurProductComponent.module.scss";
import { OurProductCard } from "./OurProductCard/OurProductCard";

export const OurProductComponent = ({ products }) => {
  return (
    <div className={style.productComponentWrapper}>
      <div className={style.cardGrid}>
        {products.map((product) => (
          <OurProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

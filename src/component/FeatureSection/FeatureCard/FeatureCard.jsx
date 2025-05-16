/* eslint-disable react/prop-types */

import style from "./FeatureCard.module.scss";

const FeatureCard = ({ featureCard }) => {
  return (
    <div className={style.featureCard}>
      <img src={featureCard.img} alt={featureCard.title} />
      <div className={style.content}>
        <h3>{featureCard.title}</h3>
        <p>{featureCard.name}</p>
      </div>
    </div>
  );
};

export default FeatureCard;

import { FeatureCard } from "@/component/FeatureSection/FeatureCard/FeatureCard";
import style from "./FeatureSection.module.scss";

const featureCards = [
  {
    id: "1231223",

    img: "src/assets/FeatureCard/trophy.png",
    title: "High Quality",
    name: "crafted from top materials",
  },
  {
    id: "123123",
    img: "src/assets/FeatureCard/guarantee.png",
    title: "Warranty Protection",
    name: "Over 2 years",
  },
  {
    id: "123123123",

    img: "src/assets/FeatureCard/shipping.png",
    title: "Free Shipping",
    name: "Order over 150 $",
  },
  {
    id: "121233123",

    img: "src/assets/FeatureCard/customer-support.png",
    title: "24 / 7 Support",
    name: "Dedicated support",
  },
];

export const FeatureSection = () => {
  return (
    <div>
      Test
      {featureCards.map((feature, index) => {
        <FeatureCard key={index} {...feature} />;
      })}
    </div>
  );
};

export default FeatureSection;

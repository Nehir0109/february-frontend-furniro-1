import style from "./FeatureSection.module.scss"
import { FeatureCard } from "@./FeatureCard/FeatureCard"
// rafce kısayol tuşu
const featureCards = [
  {
   img:"src/assets/FeatureCard/trophy.png",
   title: "High Quality",
   name : "crafted from top materials"
  },
  {
    img:"src/assets/FeatureCard/guarantee.png",
    title: "Warranty Protection",
    name : "Over 2 years"
   },
   {
    img:"src/assets/FeatureCard/shipping.png",
    title: "Free Shipping",
    name : "Order over 150 $"
   },
   {
    img:"src/assets/FeatureCard/customer-support.png",
    title: "24 / 7 Support",
    name : "Dedicated support"
   }
]
export const FeatureSection = ( ) =>{
  return {
    <div>
    {featureCards.map((feature,index)=>{
      <FeatureCard key={index} {...feature} />
    })}
    </div>
  };
};

export default FeatureSection
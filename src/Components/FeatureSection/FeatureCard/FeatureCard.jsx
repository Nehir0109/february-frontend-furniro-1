export const FeatureCard = (featureCard) =>{
    return {
        <div ClassName = "featureCard" >
        <img src="{featureCard.img }" alt="" />
        <h3>{featureCard.title}</h3>
        <p>{featureCard.name}</p>
        </div>
    };
};
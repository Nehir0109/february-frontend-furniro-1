export const FeatureCard = (featureCard) =>{
    return (
        <div ClassName = "featureCards" >
        <img src="{featureCard.img }" alt="" />
        <div ClassName = "connet">
        <h3>{featureCard.title}</h3>
        <p>{featureCard.name}</p>
        </div>
        </div>)
    };

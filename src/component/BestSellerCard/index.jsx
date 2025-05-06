import style from "./BestSellerCard.module.scss";

export default function BestSellerCard({image, title, oldPrice, newPrice}) {
    return(
        <div className={style.container}>
            <img className={style.image} src={image}  alt="image" />

            <div className={style.content}>
                <h3 className={style.title}>{title}</h3>
                <img className={style.rate} src="/BestSellerCard/stars.svg" alt="stars"/>
                <div className={style.priceWrapper}>
                    <p className={style.oldPrice}>${oldPrice}</p>
                    <p className={style.newPrice}>${newPrice}</p>
                </div>
            </div>
        </div>
    );
}
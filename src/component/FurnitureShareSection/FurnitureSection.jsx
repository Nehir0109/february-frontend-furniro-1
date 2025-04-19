import React from "react";
import style from "./FurnitureSection.module.scss";

const FurnitureSection = () => {
  const images = [
    {
      src: "https://funiro-project.netlify.app/09222e2a4565ab345d5a2fba14015856.jpg",
    },
    {
      src: "https://funiro-project.netlify.app/21f0919e719f2c0d61276e222d25df84.jpg",
    },
    {
      src: "https://funiro-project.netlify.app/ff67b4ef334bd1a464cb63cbc34ea1db.jpg",
    },
    {
      src: "https://funiro-project.netlify.app/a42307ab1199ed0d4c680fa362e0c5bf.jpg",
    },
    {
      src: "https://funiro-project.netlify.app/fc70758827e1a10bd1fa597b6230c192.jpg",
    },
    {
      src: "https://funiro-project.netlify.app/9de9606e052ed7b2ee76b456419272e4.jpg",
    },
    {
      src: "https://funiro-project.netlify.app/45dadf17004f9b1bf7a4e3a2b9956be0.jpg",
    },
    {
      src: "https://funiro-project.netlify.app/39cfcf11aa7913e5f9275d9eed646ab4.jpg",
    },
    {
      src: "https://funiro-project.netlify.app/9ee25d14fbf32f22e06d7bdd992ed285.jpg",
    },
  ];

  const duplicatedImages = [...images, ...images];

  return (
    <div className={style.furnitureSection}>
      <div className={style.header}>
        <p className={style.headerText}>Share your setup with</p>
        <h1 className={style.headerTitle}>#FurniroFurniture</h1>
      </div>
      <div className={style.imageGallery}>
        <div className={style.imageRow}>
          {duplicatedImages.map((image, index) => (
            <img key={index} className={style.image} src={image.src} alt={image.alt} />
          ))}
        </div>
        <div className={style.imageRow}>
          {duplicatedImages.map((image, index) => (
            <img
              key={index + duplicatedImages.length}
              className={style.image}
              src={image.src}
              alt={image.alt}
            />
          ))}
        </div>
        <div className={style.imageRow}>
          {duplicatedImages.map((image, index) => (
            <img
              key={index + 2 * duplicatedImages.length}
              className={style.image}
              src={image.src}
              alt={image.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FurnitureSection;

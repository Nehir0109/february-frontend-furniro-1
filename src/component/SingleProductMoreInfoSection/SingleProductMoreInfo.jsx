import React, { useState } from "react";
import style from "./SingleProductMoreInfo.module.scss";

const SingleProductMoreInfo = () => {
  const [activeTab, setActiveTab] = useState("description");

  const reviews = [
    {
      name: "James Wilson",
      image: "https://siga-aluminio.com.mx/wp-content/uploads/2019/01/person4.jpg",
      alt: "Profile picture of James Wilson",
      rating: 5,
      text: "The LuxeLounge Recliner is a game-changer! The leather is buttery soft, and the power recline feature is smooth and quiet. I love being able to charge my phone while relaxing. Best purchase I&apos;ve made in years!",
    },
    {
      name: "Sophia Martinez",
      image: "https://siga-aluminio.com.mx/wp-content/uploads/2019/01/person2.jpg",
      alt: "Profile picture of Sophia Martinez",
      rating: 4.5,
      text: "This recliner is incredibly comfortable and looks great in our living room. The only reason I&apos;m not giving it 5 stars is that it took a bit of effort to assemble. Once set up, though, it&apos;s been perfect!",
    },
    {
      name: "Robert Chen",
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      alt: "Profile picture of Robert Chen",
      rating: 5,
      text: "As someone with chronic back pain, finding a comfortable chair is crucial. The LuxeLounge Recliner has been a godsend. The lumbar support is excellent, and being able to adjust the backrest and footrest independently is fantastic.",
    },
    {
      name: "Emma Thompson",
      image:
        "https://www.masslive.com/resizer/kNl3qvErgJ3B0Cu-WSBWFYc1B8Q=/arc-anglerfish-arc2-prod-advancelocal/public/W5HI6Y4DINDTNP76R6CLA5IWRU.jpeg",
      alt: "Profile picture of Emma Thompson",
      rating: 4,
      text: "The quality of this recliner is top-notch. The leather is beautiful, and the chair is very comfortable. I&apos;m taking off one star because the USB ports are a bit hard to reach when fully reclined, but overall, I&apos;m very satisfied with my purchase.",
    },
    {
      name: "Michael Connor",
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      alt: "Profile picture of Michael Connor",
      rating: 5,
      text: "Owned several recliners over the years, but the LuxeLounge is by far the best. The power recline is smooth, the leather is luxurious, and the hidden storage compartment is a clever touch. It&apos;s pricey, but worth every penny for the comfort and quality you get.",
    },
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <i key={"full-" + i} className="fas fa-star" />
        ))}
        {halfStar && <i key="half" className="fas fa-star-half-alt" />}
        {[...Array(emptyStars)].map((_, i) => (
          <i key={"empty-" + i} className="far fa-star" />
        ))}
      </>
    );
  };

  const tabContent = {
    description: (
      <div className={`${style.tabContent} ${style.fadeIn}`}>
        <p>
          Introducing the LuxeLounge Recliner, the epitome of comfort and style for your
          living space. This exquisite piece of furniture combines cutting-edge technology
          with timeless design to provide an unparalleled relaxation experience.
        </p>
        <p>
          Crafted with premium materials, the LuxeLounge Recliner features supple,
          top-grain leather upholstery that&apos;s as durable as it is luxurious. The
          chair&apos;s frame is constructed from kiln-dried hardwood, ensuring longevity
          and stability for years to come.
        </p>
        <p>
          The LuxeLounge Recliner boasts a state-of-the-art power recline mechanism,
          allowing you to effortlessly adjust your position with the touch of a button.
          The dual-motor system enables independent control of the backrest and footrest,
          letting you find your perfect lounging position.
        </p>
        <p>
          Comfort is at the heart of the LuxeLounge Recliner&apos;s design. The chair
          features high-resiliency foam cushioning with pocketed coil springs in the seat,
          providing optimal support and preventing sagging over time. The padded headrest
          and lumbar support ensure proper alignment and comfort for extended periods of
          relaxation.
        </p>
        <p>
          For the tech-savvy lounger, the LuxeLounge Recliner comes equipped with built-in
          USB ports, allowing you to charge your devices without ever leaving your seat.
          The chair also features a concealed storage compartment in the armrest, perfect
          for keeping remotes, magazines, or snacks within easy reach.
        </p>
      </div>
    ),
    additionalInfo: (
      <div className={`${style.tabContent} ${style.fadeIn}`}>
        <ul>
          <li>Upholstery: Top-grain leather (available in multiple colors)</li>
          <li>Frame: Kiln-dried hardwood</li>
          <li>Reclining Mechanism: Dual-motor power recline</li>
          <li>Cushioning: High-resiliency foam with pocketed coil springs</li>
          <li>Weight Capacity: 350 lbs (158 kg)</li>
          <li>Dimensions (upright): (96.5 x 101.6 x 106.7 cm)</li>
          <li>Dimensions (fully reclined): (96.5 x 177.8 x 81.3 cm)</li>
          <li>Features: USB charging ports, concealed armrest storage</li>
          <li>Assembly: Minimal assembly required (instructions and tools included)</li>
          <li>Warranty: 5-year limited warranty on frame and mechanism</li>
          <li>Care Instructions: Wipe clean with a damp cloth, avoid harsh chemicals</li>
        </ul>
      </div>
    ),
    reviews: (
      <div className={`${style.reviewContainer} ${style.fadeIn}`}>
        {reviews.map((review, index) => (
          <div key={index} className={style.reviewItem}>
            <div className={style.reviewHeader}>
              <img className={style.reviewerImage} src={review.image} alt={review.alt} />
              <div className={style.reviewInfo}>
                <p className={style.reviewerName}>{review.name}</p>
                <p className={style.starRating}>{renderStars(review.rating)}</p>
              </div>
            </div>
            <p className={style.reviewText}>{review.text}</p>
          </div>
        ))}
      </div>
    ),
  };

  return (
    <div className={style.containerMoreInfo}>
      <div className={style.tabContainer}>
        {["description", "additionalInfo", "reviews"].map((tab, index) => (
          <button
            key={index}
            className={`${style.tabButton} ${activeTab === tab ? style.active : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "description"
              ? "Description"
              : tab === "additionalInfo"
              ? "Additional Information"
              : `Reviews [${reviews.length}]`}
          </button>
        ))}
      </div>

      <div>{tabContent[activeTab]}</div>

      <div className={style.imageGrid}>
        <div className={style.imageContainer}>
          <img
            className={style.imageInfo}
            src="https://ecommerce-react-seven-chi.vercel.app/images/sofa1.jpg"
            alt="sofa-image"
          />
        </div>
        <div className={style.imageContainer}>
          <img
            className={style.imageInfo}
            src="https://ecommerce-react-seven-chi.vercel.app/images/sofa2.jpg"
            alt="sofa-image"
          />
        </div>
      </div>
    </div>
  );
};

export default SingleProductMoreInfo;

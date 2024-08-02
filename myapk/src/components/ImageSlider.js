import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (!images || images.length === 0) {
    console.error("No images provided to ImageSlider.");
    return <div>No images to display</div>;
  }

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img
            src={image}
            alt={`Room ${index + 1}`}
            style={{ maxWidth: "100%", height: "auto" }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "default-image-url.jpg"; // Provide a default image URL
            }}
          />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;

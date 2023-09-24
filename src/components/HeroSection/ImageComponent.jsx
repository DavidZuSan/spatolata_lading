import smallImage from "../../assets/images/ice_cream_small.webp";
import mediumImage from "../../assets/images/ice_cream_medium.webp";
import largeImage from "../../assets/images/ice_cream_large.webp";

const ImageComponent = () => {
  return (
    <div className="circle-container">
      <div className="circle"></div>
      <img
        className="image"
        srcSet={`${smallImage} 667w,
               ${mediumImage} 1000w,
               ${largeImage} 1333w`}
        sizes="(max-width: 667px) 667px,
             (max-width: 1000px) 1000px,
             1333px"
        src={mediumImage}
        alt="Ice Cream Hero"
      />
    </div>
  );
};

export default ImageComponent;

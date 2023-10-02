import smallImage from "./images/ice_cream_small.webp";
import mediumImage from "./images/ice_cream_medium.webp";
import largeImage from "./images/ice_cream_large.webp";

const ImageComponent = () => {
  return (
    <div className="outer-container">
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
      <div className="circle-second-container">
        <div className="circle-second">
          <svg viewBox="0 0 100 100" className="svg-circle">
            <circle
              cx="50"
              cy="50"
              r="48"
              fill="none"
              stroke="#8c1b24"
              strokeWidth="1"
              strokeDasharray="4 5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ImageComponent;

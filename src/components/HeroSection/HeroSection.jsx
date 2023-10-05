import DiscountTicket from "./DiscountTicket";
import ImageComponent from "./ImageComponent";

const HeroSection = () => {
  return (
    <div className="mx-auto flex flex-col items-center p-4 md:p-16 pb-2 mb-4 mt-8">
      <div className="flex flex-col md:flex-row w-full max-w-screen-xl mx-auto justify-center items-center font-montserrat">
        <div className="flex flex-col text-center md:text-left mb-8 md:mb-0 md:mr-8 large-margin-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-darkgray mb-3">
            Enjoy Your
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-burgundy mb-3">
            Piece of
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-highlightOrange mb-8">
            Paradise.
          </h1>
          <p className="text-lg md:text-xl lg:text-lg font-bold text-darkgray mb-4">
            Ice Cream tastes better when you
            <br className="hidden md:block" /> eat it with your family and
            friends.
          </p>
          <a
            href="https://deliveroo.it/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-burgundy text-white px-4 py-2 md:px-6 md:py-3 rounded-xl mt-4 order-button shadow-md">
              Order Now
            </button>
          </a>
        </div>

        <div className="w-full mt-6 md:mt-0 md:w-1/2">
          <ImageComponent />
        </div>
      </div>

      <DiscountTicket />
    </div>
  );
};

export default HeroSection;

import DiscountTicket from "./DiscountTicket";
import ImageComponent from "./ImageComponent";

const HeroSection = () => {
  return (
    <div className="mx-auto flex flex-col items-center pt-0 md:pt-4 p-16 pb-2 mb-4 mt-16 ml-4">
      <div className="flex flex-row w-full max-w-screen-xl mx-auto ml-16 justify-center items-center font-montserrat">
        <div className="flex flex-col text-left ml-8">
          <h1 className="text-5xl font-bold text-darkgray mb-3">Enjoy Your</h1>
          <h1 className="text-5xl font-bold text-burgundy mb-3"> Piece of</h1>
          <h1 className="text-5xl font-bold text-highlightOrange mb-8">
            Paradise.
          </h1>
          <p className="text-1xl font-bold text-darkgray">
            Ice Cream tastes better when you <br /> eat it with your family and
            friends.
          </p>
          <a
            href="https://deliveroo.it/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-burgundy text-white px-4 py-2 rounded-xl mt-4 order-button shadow-md">
              Order Now
            </button>
          </a>
        </div>

        <div className="max-w-[50%] w-full ">
          <ImageComponent />
        </div>
      </div>

      <DiscountTicket />
    </div>
  );
};

export default HeroSection;

import DiscountTicket from "./DiscountTicket";
import ImageComponent from "./ImageComponent";

const HeroSection = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center pt-0 md:pt-8 p-16 pb-2 mb-4 hero-background">
      <div className="flex flex-row w-full items-center justify-center">
        <div className="w-full md:w-2/5 flex flex-col items-start mr-4">
          <h1 className="text-5xl font-bold text-bodyText mb-3">Enjoy Your</h1>
          <h1 className="text-5xl font-bold text-menuText mb-3"> Piece of</h1>
          <h1 className="text-5xl font-bold text-extraText mb-8"> Paradise.</h1>
          <p className="text-1xl font-bold text-bodyText">
            Ice Cream taste better when you eat it with your family and friends.
          </p>
          <a
            href="https://deliveroo.it/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-menuText text-[#F2F2D2] px-4 py-2 rounded-xl mt-4 order-button shadow-md">
              Order Now
            </button>
          </a>
        </div>

        <div className="w-full md:w-3/5 lg:w-1/2 xl:w-2/5 max-w-screen-sm transform scale-50">
          <ImageComponent />
        </div>
      </div>

      <DiscountTicket />
    </div>
  );
};

export default HeroSection;

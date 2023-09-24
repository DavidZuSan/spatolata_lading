import ImageComponent from "./ImageComponent";

const HeroSection = () => {
  return (
    <div className="mx-auto flex flex-row items-center justify-center pt-4 md:pt-8 p-16 hero-background">
      <div className="w-full md:w-2/5 flex flex-col items-start mr-4">
        <h1 className="text-5xl font-bold text-bodyText mb-3">
          Enjoy Yourselft
        </h1>
        <h1 className="text-5xl font-bold text-menuText mb-3">a Piece</h1>
        <h1 className="text-5xl font-bold text-extraText mb-8">of Paradise</h1>
        <p className="text-1xl font-bold text-bodyText">
          Ice Cream taste better when you eat it with your family and friends
        </p>
        <a
          href="https://deliveroo.it/en/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-menuText text-[#F2F2F2] px-4 py-2 rounded-xl mt-4">
            Order Now
          </button>
        </a>
      </div>

      <div className="w-full md:w-3/5 lg:w-1/2 xl:w-2/5 max-w-screen-sm transform scale-50">
        <ImageComponent />
      </div>
    </div>
  );
};

export default HeroSection;

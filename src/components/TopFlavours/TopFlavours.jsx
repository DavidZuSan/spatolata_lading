import featuredFlavours from "./featuredFlavours";

const TopFlavours = () => {
  // Array con colores de fondo

  return (
    <div className="container mx-auto p-4 max-w-2xl mb-10 font-montserrat">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {featuredFlavours.map((flavour) => (
          <div
            key={flavour.id}
            className="flex flex-col rounded-md overflow-hidden border-2 border-gray-300 shadow-md"
          >
            <div
              style={{ backgroundImage: flavour.bgColor }}
              className="flex justify-center pt-8"
            >
              <img
                src={flavour.image}
                alt={flavour.name}
                className="w-[160px] h-[200px] object-cover mx-auto"
              />
            </div>
            <div className="bg-white p-4 flex-grow">
              <h2 className="text-lg font-semibold">{flavour.name}</h2>
              <p className="text-sm text-gray-600">{flavour.ingredients}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopFlavours;

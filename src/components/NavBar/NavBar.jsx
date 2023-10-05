import logo from "../../assets/images/logo_spatolata.png";
import PhoneIcon from "../../assets/icons/PhoneIcon";

const NavBar = () => {
  return (
    <nav className="bg-navbar p-4 border-b border-burgundy">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <div className="flex items-center space-x-4">
          <img
            src={logo}
            alt="Spatolata Logo"
            className="h-16 w-auto lg:h-24 lg:w-auto"
          />
          <span className="text-6xl font-regular text-burgundy font-italianno lg:text-7xl">
            Spatolata
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <PhoneIcon className="w-6 h-6 sm:w-auto sm:h-auto" />
          <span className="text-3xl font-regular text-burgundy font-italianno">
            +39 3488002083
          </span>
        </div>

        <a
          href="https://www.spatolata.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="text-1xl font-medium text-burgundy font-montserrat px-4 py-2 rounded-full border-2 border-burgundy hover:bg-burgundy hover:text-white transition-all duration-300 shadow-md">
            Visit our
          </button>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;

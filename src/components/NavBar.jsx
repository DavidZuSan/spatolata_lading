import logo from "../assets/images/logo_spatolata.png";
import PhoneIcon from "../assets/icons/PhoneIcon";

const NavBar = () => {
  return (
    <nav className="bg-navbar p-4 border-b border-menuText">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4 ml-10">
          <img src={logo} alt="Spatolata Logo" className="h-16 w-auto" />
          <span className="text-5xl font-regular text-menuText font-italianno">
            Spatolata
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <PhoneIcon />
          <span className="text-3xl font-regular text-menuText font-italianno">
            +39 3488002083
          </span>
        </div>

        <a
          href="https://www.spatolata.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="text-1xl font-medium mr-10 text-menuText font-montserrat px-4 py-2 rounded-full border-2 border-menuText hover:bg-menuText hover:text-white transition-all duration-300 shadow-md">
            Visit our
          </button>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;

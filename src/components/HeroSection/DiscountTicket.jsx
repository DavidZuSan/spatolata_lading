import { useState } from "react";
import ticketImage from "./images/nine_ice_cream.webp";
import logoImage from "../../assets/images/logo_spatolata.png";
import "./heroSection.css";

const DiscountTicket = () => {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = async (event) => {
    event.preventDefault();

    const url = "/.netlify/functions/subscribe";

    const data = {
      email_address: email,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      console.log("Suscripción exitosa");
    } catch (error) {
      console.error("Hubo un error al suscribir el correo electrónico", error);
    }

    setEmail("");
  };

  return (
    <div
      className="flex items-stretch justify-center mx-auto mb-8 overflow-hidden rounded-lg shadow-xl bg-gradient-to-r from-orange-300 to-orange-500/60 font-montserrat"
      style={{ width: "65%", height: "300px" }}
    >
      <div className="flex-shrink-0 w-1/3 h-full overflow-hidden rounded-l-lg">
        <img
          src={ticketImage}
          alt="Ice Creams Ticket"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-grow py-6 px-10">
        <div className="text-center mb-4">
          <img src={logoImage} alt="Logo" className="w-16 h-auto mx-auto" />
        </div>
        <div className="text-center">
          <p className="text-darkgray mb-4 font-montserrat">
            Subscribe to our newsletter and get
            <span className="font-bold text-burgundy"> special discounts!</span>
          </p>
        </div>
        <form onSubmit={handleEmailSubmit} className="flex flex-col">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="p-2 rounded border focus:outline-none focus:border-bodyText mb-4 text-center bg-white text-bodyText"
          />
          <button
            type="submit"
            className="bg-darkgray text-white font-bold py-2 px-4 rounded hover:bg-menuText transition-all duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default DiscountTicket;

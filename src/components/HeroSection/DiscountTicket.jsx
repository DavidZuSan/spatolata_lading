import { useState } from "react";
import { toast } from "react-toastify";

import ticketImage from "./images/nine_ice_cream.webp";
import logoImage from "../../assets/images/logo_spatolata.png";
import iceCreamIcon from "../../assets/icons/icon-icecream.png";
import "./heroSection.css";

const ToastContent = () => {
  return (
    <div className="toast-content">
      <img src={iceCreamIcon} alt="Ice Cream Icon" className="toast-icon" />
      <span>Email successfully registered!</span>
    </div>
  );
};

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

      console.log("Successful subscription");
      toast.success(<ToastContent />);
    } catch (error) {
      console.error("There was an error subscribing to the email", error);
      toast.error("Error subscribing. Please try again later.");
    }
    setEmail("");
  };

  const handleRippleEffect = (event) => {
    let button = event.currentTarget;

    let ripple = document.createElement("span");
    ripple.classList.add("ripple");

    let rect = button.getBoundingClientRect();
    let size = Math.max(rect.width, rect.height);
    let top = event.clientY - rect.top - size / 2;
    let left = event.clientX - rect.left - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.top = `${top}px`;
    ripple.style.left = `${left}px`;

    button.appendChild(ripple);

    ripple.addEventListener("animationend", () => {
      ripple.remove();
    });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  return (
    <div
      className="flex flex-col md:flex-row items-stretch justify-center mx-auto mb-8 mt-16 overflow-hidden rounded-lg shadow-xl bg-gradient-to-r from-orange-300 to-orange-500/60 font-montserrat max-w-screen-md w-4/5 md:w-4/5 lg:w-2/3"
      style={{ height: "auto" }}
    >
      <div className="flex-shrink-0 w-full md:w-1/3 lg:w-1/4 h-48 md:h-auto overflow-hidden rounded-tl-lg">
        <img
          src={ticketImage}
          alt="Ice Creams Ticket"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-grow w-full py-6 px-10 mt-4 md:mt-4">
        <div className="text-center mb-6">
          <img
            src={logoImage}
            alt="Logo"
            className="w-16 lg:w-24 h-auto mx-auto"
          />
        </div>
        <div className="text-center">
          <p className="text-darkgray mb-6 font-montserrat lg:text-xl">
            Subscribe to our newsletter and get
            <span className="font-bold text-burgundy"> special discounts!</span>
          </p>
        </div>

        <form onSubmit={handleEmailSubmit} className="flex flex-col">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter your email"
            className="p-2 rounded border focus:outline-none focus:border-bodyText mb-6 text-center bg-white text-bodyText w-full"
          />

          <button
            type="submit"
            onClick={handleRippleEffect}
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

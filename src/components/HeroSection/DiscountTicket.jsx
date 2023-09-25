import { useState } from "react";

const DiscountTicket = () => {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = (event) => {
    // Prevenir la recarga de la página
    event.preventDefault();

    // Lógica para manejar la suscripción por email
    console.log(email);
  };

  return (
    <div className="ticket-container">
      <div className="ticket-header">
        <h2>Get a Discount!</h2>
      </div>
      <div className="ticket-body">
        <p>Subscribe to our newsletter and get a special discount!</p>
        <form onSubmit={handleEmailSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default DiscountTicket;

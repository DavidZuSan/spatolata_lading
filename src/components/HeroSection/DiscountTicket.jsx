import { useState } from "react";

const DiscountTicket = () => {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = async (event) => {
    event.preventDefault();

    const url = "https://us6.api.mailchimp.com/3.0/lists/a7f5d58cfa/members";

    const data = {
      email_address: email,
      status: "subscribed",
    };

    try {
      // Realizar la solicitud POST a la API de Mailchimp usando fetch
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `apikey 957a569dc88bfdc501c8b8a058b39211-us6`,
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

const apikey = process.env.MAILCHIMP_API_KEY;

const fetch = require("node-fetch");

exports.handler = async (event) => {
  // Asegurarte de que el método es POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  // Parsear el cuerpo de la solicitud
  const { email } = JSON.parse(event.body);

  if (!email) {
    return { statusCode: 400, body: "Email is required" };
  }

  // URL de la API de Mailchimp
  const url = "https://us6.api.mailchimp.com/3.0/lists/a7f5d58cfa/members";

  // Datos a enviar a Mailchimp
  const data = {
    email_address: email,
    status: "subscribed",
  };

  try {
    // Realizar la solicitud POST a la API de Mailchimp
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `apikey ${apikey}`,
      },
      body: JSON.stringify(data),
    });

    // Verificar si la respuesta es exitosa
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Devolver una respuesta exitosa
    return { statusCode: 200, body: "Subscription successful" };
  } catch (error) {
    // Manejar y devolver errores
    console.error("Subscription error", error);
    return { statusCode: 500, body: error.toString() };
  }
};

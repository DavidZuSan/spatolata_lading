const apikey = process.env.MAILCHIMP_API_KEY;
const fetch = require("node-fetch");

exports.handler = async (event) => {
  // Registro del evento recibido para depuración
  console.log("Received event:", event);

  // Asegurarte de que el método es POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  // Parsear el cuerpo de la solicitud
  const { email_address } = JSON.parse(event.body);

  if (!email_address) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: "Email is required",
        receivedData: JSON.parse(event.body),
      }),
    };
  }

  // URL de la API de Mailchimp
  const url = "https://us6.api.mailchimp.com/3.0/lists/a7f5d58cfa/members";

  // Datos a enviar a Mailchimp
  const data = {
    email_address: email_address,
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

    const responseText = await response.text();
    console.log("Respuesta de Mailchimp:", responseText);

    // Verificar si la respuesta es exitosa
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Devolver una respuesta exitosa
    return {
      statusCode: 200,
      body: "¡Suscripción exitosa! Gracias por registrarte.",
    };
  } catch (error) {
    // Registro del error para depuración
    console.error("Subscription error", error);
    return { statusCode: 500, body: error.toString() };
  }
};

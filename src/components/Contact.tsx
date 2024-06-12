import React, { useState } from "react";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        alert("Email enviado com sucesso!");
        // Limpar os campos de input
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert("Falha ao enviar o email.");
      }
    } catch (error) {
      console.error("Erro ao enviar o email:", error);
      alert("Ocorreu um erro. Tente novamente.");
    }
  };

  return (
    <form className="contact-footer">
      <span className="contact-header alegreya title-content">Contact Us</span>
      <div className="contact-left">
        <textarea
          placeholder="Nome"
          className="contact-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></textarea>
        <textarea
          placeholder="Email"
          className="contact-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></textarea>
      </div>
      <div className="contact-right">
        <textarea
          placeholder="Mensagem"
          className="contact-msg"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <div className="submit-button-container">
        <div className="submit-button" onClick={handleSubmit}>
          Enviar
        </div>
      </div>
    </form>
  );
};

export default Contact;
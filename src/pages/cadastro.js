import { useState } from "react";

function CardForm() {
  const [cardNumber, setCardNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [cvc, setCVC] = useState("");

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCVCChange = (event) => {
    setCVC(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="cardNumber">Número do cartão:</label>
        <input
          type="text"
          id="cardNumber"
          value={cardNumber}
          onChange={handleCardNumberChange}
        />
      </div>
      <div>
        <label htmlFor="fullName">Nome completo:</label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={handleFullNameChange}
        />
      </div>
      <div>
        <label htmlFor="phone">Telefone:</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={handlePhoneChange}
        />
      </div>
      <div>
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div>
        <label htmlFor="cvc">CVC:</label>
        <input
          type="text"
          id="cvc"
          value={cvc}
          onChange={handleCVCChange}
        />
      </div>
      <button type="submit">Assinar</button>
    </form>
  );
}

export default CardForm;

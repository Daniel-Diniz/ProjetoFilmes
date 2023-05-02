import React, { useState } from 'react';

function assistirButton(props) {
  const [assistido, setAssistido] = useState(false);

  const handleClick = () => {
    setAssistido(!assistido);
  }

  return (
    <button className="btn btn-primary" onClick={handleClick}>
      {assistido ? "Assistir novamente" : "Assistir"}
    </button>
  );
}

export default assistirButton;
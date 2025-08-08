import React, { useState } from 'react';

function CurrencyConverter() {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState('');
  const conversionRate = 90; // 1 Euro = 90 INR

  const handleRupeesToEuro = () => {
    if (!rupees || isNaN(rupees)) {
      alert("Please enter a valid Rupees amount.");
      return;
    }
    const converted = (parseFloat(rupees) / conversionRate).toFixed(2);
    alert(`Converting to Euro Amount is €${converted}`);
  };

  const handleEuroToRupees = () => {
    if (!euro || isNaN(euro)) {
      alert("Please enter a valid Euro amount.");
      return;
    }
    const converted = (parseFloat(euro) * conversionRate).toFixed(2);
    alert(`Converting to Rupees Amount is ₹${converted}`);
  };

  return (
    <div>
      <h2 style={{ color: 'green' }}>Currency Convertor!!!</h2>

      <div style={{ marginBottom: '10px' }}>
        <label>Amount in Rupees: </label>
        <input
          type="number"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
          placeholder="INR"
        />
        <button onClick={handleRupeesToEuro}>Convert to Euro</button>
      </div>

      <div>
        <label>Amount in Euro: </label>
        <input
          type="number"
          value={euro}
          onChange={(e) => setEuro(e.target.value)}
          placeholder="EUR"
        />
        <button onClick={handleEuroToRupees}>Convert to Rupees</button>
      </div>
    </div>
  );
}

export default CurrencyConverter;
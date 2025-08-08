import React from 'react';

function App() {
  const heading = <h1 style={{ fontWeight: 'bold' }}>Office Space , at Affordable Range</h1>;

  const officeImage = "https://officebanao.com/wp-content/uploads/2024/06/office-with-lot-desks-computers.jpg";

  const office = {
    name: "DBS",
    rent: 50000,
    address: "Chennai"
  };

    const getRentStyle = (rent) => ({
    color: rent >= 60000 ? 'green' : 'red',
    fontWeight: 'bold'
  });

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial' }}>
      {heading}

      <img
        src={officeImage}
        alt="Office"
        width="300"
        style={{ marginTop: '20px', marginBottom: '20px' }}
      />

      <h2>Name: {office.name}</h2>
      <p style={getRentStyle(office.rent)}>Rent: Rs. {office.rent}</p>
      <p>Address: {office.address}</p>

      <hr />

    </div>
  );
}

export default App;
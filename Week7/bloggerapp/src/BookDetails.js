import React from 'react';

function BookDetails() {
  const books = [
    { id: 1, title: "Master React", price: 670 },
    { id: 2, title: "Deep Dive into Angular 11", price: 800 },
    { id: 3, title: "Mongo Essentials", price: 450 }
  ];

  return (
    <div style={styles.box}>
      <h2>Book Details</h2>
      {books.map(book => (
        <div key={book.id}>
          <strong>{book.title}</strong>
          <div>{book.price}</div>
        </div>
      ))}
    </div>
  );
}

const styles = {
  box: {
    padding: '10px',
    borderRight: '3px solid green',
    minWidth: '200px'
  }
};

export default BookDetails;
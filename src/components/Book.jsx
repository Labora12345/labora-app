import React from 'react';

const Book = ({ book, onToggleStatus }) => {
  return (
    <div>
      <div>{book.title}</div>
      <div>{book.author}</div>
      {book.status === 'Checked Out' && <div>Due Date: {book.dueDate}</div>}
      <div>Status: {book.status}</div>
      <button onClick={() => onToggleStatus(book.title)}>Toggle Status</button>
      <hr />
    </div>
  );
};

export default Book;

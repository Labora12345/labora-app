import React, { useState, useEffect } from 'react';
import Book from './Book';
import SearchFilter from './SearchFilter';

const generateRandomDate = () => {
  const today = new Date();
  const randomDays = Math.floor(Math.random() * 30);
  const dueDate = new Date(today.getTime() + randomDays * 24 * 60 * 60 * 1000);
  return dueDate.toISOString().split('T')[0]; // format YYYY-MM-DD
};

const initialBooks = [
  { title: 'Book 1', author: 'John', dueDate: generateRandomDate(), status: 'Checked Out' },
  { title: 'Book 2', author: 'Jane', dueDate: generateRandomDate(), status: 'Checked Out' },
  { title: 'Book 3', author: 'Mike', dueDate: generateRandomDate(), status: 'Checked Out' },
  { title: 'Book 4', author: 'Lisa', dueDate: generateRandomDate(), status: 'Checked Out' },
  { title: 'Book 5', author: 'John', dueDate: generateRandomDate(), status: 'Checked Out' },
  { title: 'Book 6', author: 'Jane', dueDate: generateRandomDate(), status: 'Checked Out' },
  { title: 'Book 7', author: 'Mike', dueDate: '', status: 'Available' },
  { title: 'Book 8', author: 'Lisa', dueDate: '', status: 'Available' },
  { title: 'Book 9', author: 'John', dueDate: '', status: 'Available' },
  { title: 'Book 10', author: 'Jane', dueDate: '', status: 'Available' }
];

const Books = () => {
  const [books, setBooks] = useState(initialBooks);
  const [filteredBooks, setFilteredBooks] = useState(books);

  useEffect(() => {
    setFilteredBooks(books);
  }, [books]);

  const handleToggleStatus = (title) => {
    setBooks(books.map(book =>
      book.title === title
        ? { ...book, status: book.status === 'Checked Out' ? 'Available' : 'Checked Out', dueDate: book.status === 'Checked Out' ? '' : generateRandomDate() }
        : book
    ));
  };

  const handleSearch = (query) => {
    setFilteredBooks(
      books.filter(book =>
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return (
    <div>
      <h2>Books List</h2>
      <SearchFilter onSearch={handleSearch} />
      <div>
        <div>No.</div>
        <div>Title</div>
        <div>Author</div>
        <div>Due Date</div>
        <div>Status</div>
        {filteredBooks.map((book, index) => (
          <Book key={index} book={book} onToggleStatus={handleToggleStatus} />
        ))}
      </div>
    </div>
  );
};

export default Books;

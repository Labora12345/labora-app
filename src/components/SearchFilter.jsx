import React, { useState } from 'react';

const SearchFilter = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search books..."
      value={searchQuery}
      onChange={handleChange}
    />
  );
};

export default SearchFilter;

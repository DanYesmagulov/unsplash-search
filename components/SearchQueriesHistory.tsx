import React from 'react';
import { useSelector } from 'react-redux';

const SearchQueriesHistory = () => {
  const searchTerm = useSelector((state) => state.searchTerm);
  console.log(searchTerm);
  return (
    <div className='searchTerms'>
      <h6 className='searchTerms__title'>Ваши запросы</h6>
      <ul className='searchTerms__item'>
        {searchTerm.map((term, id) => (
          <li key={id}>{term}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchQueriesHistory;

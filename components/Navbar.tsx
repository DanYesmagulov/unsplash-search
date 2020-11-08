import { useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import SearchQueriesHistory from './SearchQueriesHistory';

function Header() {
  const [showSearchTerms, setShowSearchTerms] = useState(false);
  const searchTerm = useSelector((state) => state.searchTerm);
  const hideSearchBar = useSelector((state) => state.hideSearchBar);
  return (
    <>
      <div className='navbar'>
        <div className='navbar__logo'>
          <Link href='/'>
            <a>
              <img src='/unsplash.png' alt='' />
              <span>ImageStock</span>
            </a>
          </Link>
        </div>
        <ul className='navbar__links'>
          {!hideSearchBar ? (
            <Link href='/'>
              <li className='navbar__links_search'>
                <img src='/search_24px.png' alt='' />
                <span>Поиск</span>
              </li>
            </Link>
          ) : null}
          <li className='navbar__links_fav'>
            <Link href='/favourites'>
              <a>
                <img src='/hearth.png' alt='' />
                <span>Избранное</span>
              </a>
            </Link>
          </li>
          <li
            className='navbar__links_history'
            onClick={() => {
              if (searchTerm.length) {
                setShowSearchTerms(!showSearchTerms);
              }
            }}>
            <img src='/history_24px.png' alt='' />
            <span>История поиска</span>
          </li>
        </ul>
      </div>
      {showSearchTerms ? <SearchQueriesHistory /> : null}
    </>
  );
}

export default Header;

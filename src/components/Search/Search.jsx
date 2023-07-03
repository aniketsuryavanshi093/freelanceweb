import React, { useCallback, useState } from 'react';
import './search.css';
import { toast } from 'react-toastify';

const Search = ({ setValue, placeholder, waitTime, minSearchChar }) => {
  const [searchval, setsearchval] = useState('');
  let tempInterval = '';
  const handleChanges = useCallback((val) => {
    setsearchval(val.target.value.trim());
    const searchedKeywrod = val.target.value.trim();
    clearTimeout(tempInterval);
    tempInterval = setTimeout(() => {
      const qp = searchedKeywrod.length > (minSearchChar || 2) ? searchedKeywrod : '';
      setValue(qp);
      if (searchedKeywrod.length > 0 && searchedKeywrod.length < (minSearchChar || 2)) {
        toast.warn(`Please enter at least ${minSearchChar + 1 || 3} characters to search...`);
      }
    }, waitTime || 500);
  }, []);
  return (
    <div className="search text_primary ">
      <i className="fa-solid fa-magnifying-glass search-icon " />
      <input
        type="text"
        value={searchval}
        placeholder={placeholder || 'Search...'}
        className="dashboard-header_search "
        onChange={handleChanges}
      />
      {searchval.length > 1 && (
        <i
          className="fa-solid fa-xmark searchclose"
          onClick={() => {
            setValue('');
            setsearchval('');
          }}
        />
      )}
    </div>
  );
};

export default Search;

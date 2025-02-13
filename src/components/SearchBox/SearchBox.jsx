import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { findContact } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  

  return (
    <div>
      <label>
        <span>Find contact by name</span>
        <input
          name="find"
          type="text"
          onChange={e => dispatch(findContact(e.target.value))}
        />
      </label>
    </div>
  );
};

export default SearchBox;
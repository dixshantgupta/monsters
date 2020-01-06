import React from 'react';

import './search-box.style.css'

//use function if we dont need state
export const SearchBox = ({placeholder, handleChange}) => (
    <input 
    type="search" 
    placeholder={placeholder}
    className="search"
     onChange = {handleChange} 
     />
);

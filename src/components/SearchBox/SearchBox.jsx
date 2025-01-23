import React from 'react'

const SearchBox = ({value, onFilter})=> {
  return (
    <div>
      <label>
        <span>
          Find contact by name
        </span>
        <input value={value} onChange={e => onFilter(e.target.value)}></input>
      </label>
      <button>Find</button>
    </div>
  )
}

export default SearchBox
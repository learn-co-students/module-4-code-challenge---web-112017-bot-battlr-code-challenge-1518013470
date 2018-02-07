import React from 'react'

const Filter = ({value, handleSelection}) => {
  return (
    <select defaultValue="All" value={value} onChange={handleSelection}>
    <option value="All">All</option>
    <option value="Assault"></option>
      <option value="Defender"></option>
      <option value="Support"></option>
    </select>
  )
}

export default 'Filter'

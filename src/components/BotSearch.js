import React from 'react'

const BotSearch = (props) => {
  return (
    <div className="filter-container">
      <h2>Filter The Bots:</h2>
      <select className="filter-bar" onChange={ props.changeFilter } value={ props.filter }>
        <option value="">None</option>
        <option>Assault</option>
        <option>Defender</option>
        <option>Support</option>
      </select>
    </div>
  )
}

export default BotSearch

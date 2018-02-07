import React from 'react'

const BotSearch = (props) => {
  return (
    <div>
      <select onChange={ props.changeFilter }>
        <option value="">None</option>
        <option>Assault</option>
        <option>Defender</option>
        <option>Support</option>
      </select>
    </div>
  )
}

export default BotSearch

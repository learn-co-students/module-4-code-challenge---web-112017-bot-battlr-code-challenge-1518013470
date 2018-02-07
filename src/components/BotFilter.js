import React from "react";

const BotFilter = props => {
  return (
    <div>
      <label htmlFor="botfilter">Filter bots by type: </label>
      <select id="botfilter" onChange={props.setFilter}>
        <option value="all">All</option>
        <option value="Assault">Assault</option>
        <option value="Defender">Defender</option>
        <option value="Support">Support</option>
      </select>
    </div>
  )
}

export default BotFilter

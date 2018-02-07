import React from 'react'

const Search = props => {
  function changeSearchTerm(event){
    event.preventDefault()
    let input = document.querySelector('#search').value
    props.changeSearchTerm(input)
  }
  return(
    <div className="search">
      <form onSubmit={changeSearchTerm}>
        <input type='text' id="search" />
        <input type='submit' value='Search by Name' />
      </form>
    </div>
  )
}

export default Search;

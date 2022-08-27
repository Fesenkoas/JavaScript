import React, { useContext } from 'react'
import { StarWarsContext } from './../utils/context';

const NavItem = ({itemTitle, changePage}) => {
  const {setCurrentPage} = useContext(StarWarsContext)
  return (
    <li onClick={() => setCurrentPage(itemTitle)} className="nav-item btn btn-danger mx-1">{itemTitle}</li>
  )
}

export default NavItem
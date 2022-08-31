import React from 'react'
import {  Link } from 'react-router-dom'

const NavItem = ({ item, hero }) => {
  let route = `${item.route}`;
  if(hero!=='luke'){  route = `${item.route}/${hero}`;}
  return (
    <li>
      <Link className="nav-item btn btn-danger mx-1" to={route} >{item.title}</Link>
    </li>
  )
}

export default NavItem
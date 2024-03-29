import React from 'react'
import { Link } from 'react-router-dom'

interface Props{
  item:{
    route:string;
    title:string;
  }
  hero:string;
}
const NavItem = ({ item, hero }:Props) => {
  return (
    <li>
      <Link className="nav-item btn btn-danger mx-1" to={`${item.route}/${hero}`}>{item.title}</Link>
    </li>
  )
}

export default NavItem
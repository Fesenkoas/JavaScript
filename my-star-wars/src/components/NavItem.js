import React from 'react'

const NavItem = ({itemTitle, page}) => {
  return (
    <li onClick={() => page(itemTitle)}className="nav-item btn btn-danger mx-1">{itemTitle}</li>
  )
}

export default NavItem

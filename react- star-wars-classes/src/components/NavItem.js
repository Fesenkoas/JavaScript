//import React, { useContext } from 'react'
import { StarWarsContext } from '../util/context'

//Your
const NavItem = ({itemTitle}) => {
  return (
    <StarWarsContext.Consumer>
    {({changePage}) =>
      (<li onClick={() => changePage(itemTitle)}className="nav-item btn btn-danger mx-1">{itemTitle}</li>)
    }
    </StarWarsContext.Consumer>
  )
}

//Aleksandr
// const NavItem = ({itemTitle}) => {
//   const {changePage} = useContext(StarWarsContext)
//   return (
//     <li onClick={() => changePage(itemTitle)}className="nav-item btn btn-danger mx-1">{itemTitle}</li>
//   )
// }

export default NavItem

import { useContext } from 'react'
import { StarWarsContext } from '../util/context'


const NavItem = ({itemTitle}) => {
  const {changePage} = useContext(StarWarsContext)
  return (
    <li onClick={() => changePage(itemTitle)}className="nav-item btn btn-danger mx-1">{itemTitle}</li>
  )
}

export default NavItem

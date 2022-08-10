import { useContext } from 'react'
import { StarWarsContext } from '../util/context'


const NavItem = ({itemTitle}) => {
  const {setCurrent} = useContext(StarWarsContext)
  return (
    <li onClick={() => setCurrent(itemTitle)}className="nav-item btn btn-danger mx-1">{itemTitle}</li>
  )
}

export default NavItem

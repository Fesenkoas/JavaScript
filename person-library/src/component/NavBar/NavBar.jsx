
import { Link } from "react-router-dom";
const Nav = (props) =>{
    return (
        <nav className={props.myStyle}>
            <Link  className={props.myLink} to="/">Home</Link>
            <Link  className={props.myLink} to="/Star_Wars">Star Wars</Link>
            <Link  className={props.myLink} to="/Person">Person</Link>
            <Link  className={props.myLink} to="/Library">Library</Link>
        </nav>
        
        );

};

export default Nav;

import { Link } from "react-router-dom";
const Nav = (props) =>{
    return (
        <nav className={props.myStyle}>
            <ul>
            <li><Link   to="/">Home</Link></li>
            <li><Link   to="/About">About ME</Link></li>
            <li><Link   to="/Star_Wars">Star Wars</Link></li>
            <li><Link   to="/Contact">Contact</Link></li>
            </ul>
        </nav>
        
        );

};

export default Nav;
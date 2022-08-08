import s from '../css/style.module.css'
import { Link } from "react-router-dom";
const Header = (props) =>{
    return (
        <header >
        <div className={s.socButton}>
            <ul>
                <li><Link to="#"><span>Facebook</span></Link></li>
                <li><Link to="#"><span>YouTube</span></Link></li>
                <li><Link to="#"><span>Instagram</span></Link></li>
            </ul>
        </div>
        <h1>Luke Skywalker</h1>
        </header>
        );

};

export default Header;
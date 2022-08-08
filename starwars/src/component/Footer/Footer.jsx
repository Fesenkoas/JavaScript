import s from '../css/style.module.css'
import { Link } from "react-router-dom";

const Footer = (props) =>{
    return (
        <footer>
            <div className={s.button}>
            <p><Link to="#" alt="email">Send me an <span className={s.email}>Email</span></Link>
            </p>
            </div>
        </footer>
        );

};

export default Footer;
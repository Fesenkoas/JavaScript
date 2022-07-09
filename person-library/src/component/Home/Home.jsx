import s from './general.module.css'
import Nav from "../../component/NavBar/NavBar"
import Header from "../Header/Header";
import Footer from "../../component/Footer/Footer"
const Home = (props) =>{
    return (
            <div className="wrap">
              <Header myStyle={s.headerHome}/>
              <Nav myStyle={s.nav} myLink={s.link}/>
              <div>Welcom to My Sites</div>
              <Footer/>
            </div>
       
        )
}

export default Home;
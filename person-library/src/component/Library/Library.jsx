import s from './Library.module.css'
import Header from "../../component/Header/Header"
import Nav from "../../component/NavBar/NavBar"
import Footer from "../../component/Footer/Footer"
const Library = (props) =>{
return(
    <div className={s.body}>
        <Header myStyle={s.header} />
        <Nav myStyle={s.nav} myLink={s.link}/>
    <main className={s.main}>
      <table className={s.tableLib}>
        <thead>
          <tr>
              <th>Number</th>
              <th>ISBN</th>
              <th>Title</th>
              <th>Author</th>
              <th>Year</th>
          </tr>
        </thead>
        <tbody id="list">
        </tbody>
      </table>
    </main>
    <Footer myStyle={s.footer}/>
    </div>
)

};

export default Library;
import s from './Person.module.css'
import Header from "../../component/Header/Header"
import Nav from "../../component/NavBar/NavBar"
import Footer from "../../component/Footer/Footer"
const Person = () =>{
     
    return (
        <div>
        <Header myStyle={s.header}/>
        <Nav myStyle={s.nav} myLink={s.link}/>
    <main>
        <div className={s.input_group}>
            <div className={s.item}>
                <input type="text" required className={s.input}/>
                <label for="personId" className={s.label}>ID Number</label>
            </div>

            <div className={s.item}>
                <input type="text" required className={s.input} />
                <label for="firstName" className={s.label}>First Name</label>
            </div>

            <div className={s.item}>
                <input type="text" id="lastName" required className={s.input} />
                <label for="lastName" className={s.label}>Last Name</label>
            </div>

            <div className={s.item}>
                <input type="date" id="age" required className={s.input} />
                <label for="age" className={s.label}>Age</label>
            </div>

            <div className={s.item}>
                <input id="salary" type="number" min="0" required className={s.input} />
                <label for="salary" className={s.label}>Salary</label>
            </div>
            <div className={s.item}>
                <button className={s.addPerson}>Add person</button>
            </div>
        </div>

        <div>
            <h2>Stats</h2>
            <table>
                <thead>
                    <tr>
                        <td>MAX Age</td>
                        <td>MIN Age</td>
                        <td>Average Age</td>
                        <td>Average Salary</td>
                        <td>Total Salary</td>
                    </tr>
                </thead>
                <tbody id="stats"></tbody>
                <tfoot>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>
        </div>
        <div>
            <h2>Persons</h2>
            {/* <ol id="personsList"></ol> */}
            <table>
                <thead>
                    <tr>
                        <td>ID Number</td>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Age</td>
                        <td>salary</td>
                    </tr>
                </thead>
                <tbody id="personsList"></tbody>
                <tfoot>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </main>
    <Footer/>
    </div>
    );
    };

export default Person;
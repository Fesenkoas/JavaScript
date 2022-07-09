
const SectionRight = ({s}) =>{
    return (
        <section className={s.right}>
        <table>
            <tr>
                <th colspan="3">Dream Team</th>
            </tr>
            <tr>
                <td><img src={require('../Images/friend1.jpg')} alt="friend"/></td>
                <td><img src={require('../Images/friend2.jpg')} alt="friend"/></td>
                <td><img src={require('../Images/friend3.jpg')} alt="friend"/></td>
            </tr>
            <tr>
                <td><img src={require('../Images/friend4.jpg')} alt="friend"/></td>
                <td><img src={require('../Images/friend5.jpg')} alt="friend"/></td>
                <td><img src={require('../Images/friend6.jpg')} alt="friend"/></td>
            </tr>
            <tr>
                <td><img src={require('../Images/friend7.jpg')} alt="friend"/></td>
                <td><img src={require('../Images/friend8.jpg')} alt="friend"/></td>
                <td><img src={require('../Images/friend9.jpg')} alt="friend"/></td>
            </tr>
        </table>
    </section>
        );

};

export default SectionRight;
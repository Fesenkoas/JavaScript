
const SectionLeft = ({s}) =>{
    return (
        <section className={s.left}>
            <img src={require('../Images/main.jpg')} alt="Luke Skywalker"/>
            <div className={s.middle}>
                <div className={s.text}>Luke Skywalker</div>
              </div>
        </section>
        );

};

export default SectionLeft;
import React from 'react'
import { friends, friends2 } from '../utils/constants';

const DreamTeam = () => {
    return (
        <section className="float-end w-50 mx-1 row border">
            <h2 className="col-12 text-center">Dream Team</h2>
            {/* Import in classes */}
            {
                friends.map((friends, index) => {
                    if(index === 6) return <img className="col-4 p-1 bottomLeft" src={friends} key = {index} alt={`${"friend"+index}`} />
                    if(index === 8) return <img className="col-4 p-1 bottomRight" src={friends} key = {index} alt={`${"friend"+index}`} />
                    else return <img className="col-4 p-1" src={friends} key = {index} alt={`${"friend"+index}`} />
                })
            }
            {/* import in require */}
            {/* {
                friends2.map((friends, index) => {
                    if(index === 6) return <img className="col-4 p-1 bottomLeft" src={friends} key = {index} alt={`${"friend"+index}`} />
                    if(index === 8) return <img className="col-4 p-1 bottomRight" src={friends} key = {index} alt={`${"friend"+index}`} />
                    else return <img className="col-4 p-1" src={friends} key = {index} alt={`${"friend"+index}`} />
                })
            } */}
        </section>
    )
}

export default DreamTeam
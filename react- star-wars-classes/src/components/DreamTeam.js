import React, { useContext } from 'react'
import { friends } from '../utils/constants';
import Friend from './Friend';
import { StarWarsContext } from './../utils/context';

const DreamTeam = () => {
    const {handelClick, photos} = useContext(StarWarsContext)
    return (
        <section className="float-end w-50 mx-1 row border">
            <h2 className="col-12 text-center">Dream Team</h2>
            {photos.map((item, index) => <Friend handelClick={handelClick} key={index} photo={item} number={index}/>)}
        </section>
    )
}

export default DreamTeam
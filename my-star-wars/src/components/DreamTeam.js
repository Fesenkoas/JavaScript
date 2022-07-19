import React from 'react'
import { friends } from '../utils/constants';
import Friends from './Freands'

const DreamTeam = ({cPhoto,change}) => {
    
   const photoArr = () =>{
    if(cPhoto === null){
        
       return friends.map((item, index) => <Friends change={change} key={index} photo={item} number={index+1} bool={false}/>)
    }else 
       return <Friends  photo={cPhoto} change={change} bool={true}/> 
    }
    return (
        <section className="float-end w-50 mx-1 row border">
            <h2 className="col-12 text-center">Dream Team</h2>
            {photoArr()}
        </section>
    )
}

export default DreamTeam

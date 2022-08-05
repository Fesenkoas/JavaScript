import React from "react";
import { StarWarsContext } from "../util/context";
import { friends } from "../utils/constants";
import Friends from "./Freands";

const DreamTeam = () => {

     const photoArr = (photo, handelClick) =>{
      if(photo === null){

         return friends.map((item, index) => <Friends change={handelClick} key={index} photo={item} number={index+1} bool={false}/>)
      }else
         return <Friends  photo={photo} change={handelClick} bool={true}/>
      }
      
  return (
    <section className="float-end w-50 mx-1 row border">
      <h2 className="col-12 text-center">Dream Team</h2>
      <StarWarsContext.Consumer>
        {({ photo, handelClick }) => ( photoArr(photo, handelClick) )}
      </StarWarsContext.Consumer>
    </section>
  );
};

export default DreamTeam;

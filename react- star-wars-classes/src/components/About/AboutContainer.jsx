import React, { Component } from 'react'
import { base_url } from "../../utils/constants"
import Preloader from '../common/Preloader/Preloader'
import AboutMe from './AboutMe'


export default class AboutContainer extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
        isLoading:true,
        user:[],
        imgUrl:''
      }
    }
    componentDidMount(){
      const dateOld = localStorage.getItem('edited')
      const date = new Date();
      const current = `${date.getDate()} ${date.getMonth()+1} ${date.getFullYear()}`;
      
      if(dateOld >= current ){//if the date is greater than the current one, then we take it from the locale
        console.log("Old");
        const oldData ={
          name:localStorage.getItem("name"),
          gender:localStorage.getItem("gender"),
          skin_color:localStorage.getItem("skin_color"),
          hair_color:localStorage.getItem("hair_color"),
          height:localStorage.getItem("height"),
          eye_color:localStorage.getItem("eye_color"),
          mass:localStorage.getItem("mass"),
          birth_year:localStorage.getItem("birth_year"),
        };
        this.setState({
          user:oldData ,
          imgUrl:localStorage.getItem("image"),
          isLoading:false});

      }else{ //if the date is less than or equal to the local one, then we take it from the local
        console.log("update");
        fetch(`${base_url}/v1/peoples/1`)
        .then(response => response.json())
        .then(data =>{this.setState({
            user:data, 
            imgUrl:`${base_url}/${data.image}`,
            isLoading:false}
            )
            localStorage.setItem("edited", `${date.getDate()} ${date.getMonth()+2} ${date.getFullYear()}`);
            localStorage.setItem("name", this.state.user.name);
            localStorage.setItem("gender", this.state.user.gender);
            localStorage.setItem("skin_color", this.state.user.skin_color);
            localStorage.setItem("hair_color", this.state.user.hair_color);
            localStorage.setItem("height", this.state.user.height);
            localStorage.setItem("eye_color", this.state.user.eye_color);
            localStorage.setItem("mass", this.state.user.mass);
            localStorage.setItem("birth_year", this.state.user.birth_year);
            localStorage.setItem("image", this.state.imgUrl);
        })
       }
      }
      componentWillUnmount(){
        console.log("About Me componentWillUnmount");
      }

  render(){
    return (
      <>
      {this.state.isLoading?<Preloader/>:<AboutMe  User={this.state.user} imgUrl={this.state.imgUrl}/>}
      </>
    )
  }
}

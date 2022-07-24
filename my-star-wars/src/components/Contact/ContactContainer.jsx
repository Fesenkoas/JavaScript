import React, { Component } from 'react'
import Contact from './Contact'
import { base_url } from "../../utils/constants"


export default class ContactContainer extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
          isLoading:true,
          planets:[{name:'Loading.........'}],
        }
      }
      fillPlanets(url) {
        fetch(url)
          .then(response => response.json())
          .then(data =>{
            this.setState({planets:data, isLoading:false})
            localStorage.setItem("planets", JSON.stringify(this.state.planets) );
          });
        
      }
    
      componentDidMount() {
        
        const dateOld = localStorage.getItem('edited')
        const date = new Date();
        const current = `${date.getDate()} ${date.getMonth()+1} ${date.getFullYear()}`;
        
        if(dateOld >= current ){//if the date is greater than the current one, then we take it from the locale
          console.log("Old Contact");
          this.setState({
            planets:JSON.parse(localStorage.getItem("planets")), 
            isLoading:false}
            );
  
        }else{ //if the date is less than or equal to the local one, then we take it from the local
          console.log("update Contact");
          this.fillPlanets(`${base_url}/v1/planets`);
          localStorage.setItem("edited", `${date.getDate()} ${date.getMonth()+2} ${date.getFullYear()}`);
          }
         }

      componentWillUnmount(){
        console.log("Component Contact");
    }
  render() {
    return (
      <>
       <Contact planets={this.state.planets}/>
      </>
    )
  }
}

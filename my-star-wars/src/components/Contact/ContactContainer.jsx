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
          .then(data =>this.setState({
              planets:data, 
              isLoading:false}
              ));
      }
    
      componentDidMount() {
        this.fillPlanets(`${base_url}/v1/planets`);
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

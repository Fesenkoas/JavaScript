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
      componentDidMount(){
          fetch(`${base_url}/v1/planets`)
          .then(response => response.json())
          .then(data =>this.setState({
              planets:data, 
              isLoading:false}
              ))
        }
  render() {
    return (
      <div>
        {this.state.isLoading?<Contact planets={this.state.planets}/>:<Contact planets={this.state.planets}/>}
        <Contact planets={this.state.planets}/>
      </div>
    )
  }
}

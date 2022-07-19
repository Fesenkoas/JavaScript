import React, { Component } from 'react'
import Contact from './Contact'
import { base_url } from "../../utils/constants"


export default class ContactContainer extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
          isLoading:true,
          user:[],
          imgUrl:''
        }
      }
      componentDidMount(){
          fetch(`${base_url}/v1/planets`)
          .then(response => response.json())
          .then(data =>this.setState({
              user:data, 
              imgUrl:`${base_url}/${data.image}`,
              isLoading:false}
              ))
        }
  render() {
    return (
      <div>
        <Contact/>
      </div>
    )
  }
}

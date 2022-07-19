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
        fetch(`${base_url}/v1/peoples/1`)
        .then(response => response.json())
        .then(data =>this.setState({
            user:data, 
            imgUrl:`${base_url}/${data.image}`,
            isLoading:false}
            ))
      }
  render(){
    return (
      <>
      {this.state.isLoading?<Preloader/>:<AboutMe  User={this.state.user} imgUrl={this.state.imgUrl}/>}
      </>
    )
  }
}

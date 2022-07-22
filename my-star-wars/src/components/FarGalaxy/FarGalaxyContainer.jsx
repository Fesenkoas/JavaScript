import React, { Component } from 'react'
import FarGalaxy from './FarGalaxy'
import {base_url} from '../../utils/constants'
import Preloader from '../common/Preloader/Preloader'

export default class FarGalaxyContainer extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
            isLoading:true,
            openingCrawl:'',
            date:''
        }
      }
      componentDidMount(){
          const text = sessionStorage.getItem('opening_crawl')
          if(text){
              this.setState({openingCrawl:text, isLoading:false});
          }else{
          const episode = Math.floor(1 + Math.random()*6);
          fetch(`${base_url}/v1/films/${episode}`)
          .then(response =>response.json())
          .then(data => {
              this.setState({openingCrawl:data.opening_crawl, isLoading:false})
              sessionStorage.setItem('opening_crawl', data.opening_crawl)
          });
          }
      }
      componentWillUnmount(){
        
        console.log("FarGalaxy componentWillUnmount");
    }
  render() {
    return (
      <>
        {this.state.isLoading?<Preloader/>:<FarGalaxy openingCrawl={this.state.openingCrawl}/>}
      </>
    )
  }
}

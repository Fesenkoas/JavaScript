import React from "react";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { navItems } from "./utils/constants"

class  App extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
      current: navItems[0],
      zoom: false,
      photo:null
    };
  }
  changePage = current => {
    this.setState({current})
  }
  handelClick = (photo) => {
    
    if(this.state.zoom)this.setState({photo:null, zoom:false});
    
    else this.setState({photo,zoom:true});
    
    // there im have question
    // console.log(photo);
    // console.log(this.state.photo);
  }
  
  changeZoom = (zoom) =>{
    this.setState(!zoom)
  }
  render(){
  return (
    
    <div className="container-fluid">
      <Header page ={this.changePage}/>
      <Main current ={this.state.current} cPhoto={this.state.photo} change={this.handelClick}/>
      <Footer />
    </div>
  );
  }
}

export default App;

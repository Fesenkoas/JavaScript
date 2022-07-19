import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const base_url ='https://sw-info-api.herokuapp.com';

class App extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       isLoading:true,
    }
  }
  componentDidMount(){
    fetch(`${base_url}/v1/peoples/1`)
    .then(response => response.json())
    .then(data =>this.setState({
      isLoading:false,
      name:data.name,
      imgUrl:`${base_url}/${data.image}`
    }))
  }
  render(){
    if(this.state.isLoading) return( <div className='spinner-border text-primary'><h1>Loading...</h1></div>);
    else{return (
    <div className="App">
    <h1>Name: {this.state.name}</h1>
    <img src ={this.state.imgUrl}alt='#'/>
    </div>
  );}
}
}

export default App;

import React from 'react'
import { store } from './../store/confStore';

class Balance extends React.Component {
  componentDidMount(){
    this.unsubscribe = store.subscribe(()=> this.forceUpdate())
  }
  componentWillUnmount(){
    this.unsubscribe();
  }
  render(){
  return (
    <div>
        <h1>Bank</h1>
        <h3>Balance = {store.getState().balance}</h3>
    </div>
  )}
}

export default Balance
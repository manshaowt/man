import React,{Component,Fragment} from 'react'
import Menu from './components/Memu'
import Order from './components/Order'
import {Route} from 'react-router-dom'
import './App.css'
export default class App extends Component{
    render(){
       return (
       <Fragment>
           <div className="left"><Menu/></div>
           <div className="context">
           <Route path="/orders" component={Order}></Route>
           </div> 
       </Fragment> 
       )
    }
}
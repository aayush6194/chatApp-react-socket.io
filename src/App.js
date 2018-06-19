import React, { Component } from 'react';
import openSocket from 'socket.io-client';
import { BrowserRouter as Router,  Route, Link, Switch } from "react-router-dom";
import {hashHistory} from "react-router";
import Home from "./Home";
import Profile from "./Profile";
import StartPage from "./StartPage";
import Navbar from './Navbar';
import Socket from './Socket';
import './app.css'

class App extends Component {

  constructor(props){
    super(props);
    this.socket = openSocket('http://localhost:3001');
    this.state = {poop : "SD",  message : "" ,messages: [{sender: "", to: "", content: ""}], display: ["poop"] };
}
  componentDidMount(){
  //  this.getRequest();
    this.socket.on('message', (data)=>{
      this.setState({display: [...this.state.display, data.message]});
    });

    this.button = document.getElementById("test");
    window.addEventListener("keydown", (e)=>{ if(e.keyCode==  13){  this.handleSubmit()}});
      }

  getRequest(){
    var data = {};

    var API = "http://localhost:3001/api";
    var ourRequest =new XMLHttpRequest();
    ourRequest.open("GET", API);

    ourRequest.onload = function(){
      var ourData = JSON.parse(ourRequest.responseText);
      data = ourData;
      console.log(data.poop);
    };
    ourRequest.send();
    this.setState({ poop:data.poop });
  }

  postRequest (){
    var API = "http://localhost:3001/api";
    fetch(API, {
    	method: 'GET'
    }).then(function(response) {
    	alert(response);
    }).catch(function(err) {
    		alert(err);
    });
  }

  handleChange (e){
      this.setState({message: e.target.value});
  }

  handleSubmit(){
    if( this.state.message != ""){
      this.socket.emit('message', {
        user: "poop",
        message: this.state.message
      });
      this.setState({message: ""});
    }
  }

  render() {
    return (
      <Router>
         <div className="container grid-container">
          
           <Switch>
               <Route exact path="/" component={StartPage} />
               <Route  path="/home"  render={()=> <Home  text={this.state.message} data={this.state.display} change={this.handleChange.bind(this)} submit={this.handleSubmit.bind(this)}/>}/>
               <Route path="/profile" component={Profile} />
           </Switch>
         </div>
       </Router>
    );
  }
}

export default App;

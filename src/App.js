import React, { Component } from 'react';
import openSocket from 'socket.io-client';
import { BrowserRouter as Router,  Route, Link, Switch } from "react-router-dom";
import {hashHistory} from "react-router";
import { withRouter } from 'react-router-dom'


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
    this.state = {user: "", message : "", temp: "", wrong : "false", temp2 : "", messages: [], display: [] };
    this.component ="";
  }

  componentDidMount(){
    this.socket.on('message', (data)=>{
      var type1 = "recieved";
      if(data.sender === this.state.user){
        type1 = "sent";
      }
      var obj = {content :  data.message, sender: data.sender, reciever: data.reciever, date:new Date().toISOString().slice(0, 19).replace('T', ' ').substring(0, 10),seen :0,id:1, type: type1};
      this.setState({messages : [...this.state.messages, obj]});
    });}

  getRequest(){
    var data;
    var API = "http://localhost:3001/test";
    var ourRequest =new XMLHttpRequest();
    ourRequest.open("GET", API);
    ourRequest.onload = function(){
      var ourData = JSON.parse(ourRequest.responseText);
      data = (JSON.stringify(ourData));
     };
     ourRequest.send();
  }

  postRequest (){
    var API = "http://localhost:3001/verify";
    fetch(API, {
      method: 'POST',
      headers: {
          "Content-Type": "application/x-www-form-urlencoded"
      },
      body: `user=${this.state.temp}&password=${this.state.temp2}`,
      }).then(function(response) {
          return response.json();
     }).then((data)=>{
       if(data.verified){
         this.setState({user : data.user});
         alert(`Welcome ${this.state.user}`);
       }
       else{
         this.setState({wrong : "true"})
          this.setState({temp : ""});
          this.setState({temp2: ""});
          setTimeout(()=>{this.setState({wrong : "false"})}, 1000);

       }
     })
      .catch(function(err) {
          alert(err);
      });
    //withRouter(history.push("/home"));
  }

  getFetchRequest (){
    var temp;
    var API = `http://localhost:3001/messages:${this.state.user}`;
    fetch(API, {
    	method: 'GET',

    }).then(function(response) {
        return response.json();
    }).then((data)=>{
      data.map((x)=>{ this.setState({messages :  [...this.state.messages, x]})   });
    })
    .catch(function(err) {
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
        message: this.state.message,
        sender: this.state.user,
        reciever: "all"
      });
      this.setState({message: ""});
    }
  }

  logout(){
    this.setState({user: "", message : "", temp: "", temp2 : "", messages: [], display: [] , wrong: "false"});
  }
  render(){
    if(this.state.user === ""){
      this.component = <StartPage status={this.state.wrong} change={(e)=>{this.setState({temp: e.target.value})}} change2={(e)=>{this.setState({temp2: e.target.value})}} request={this.postRequest.bind(this)} />;
    }
    else{
      this.component = <Home user={this.state.user} logout={this.logout.bind(this)} load={this.getFetchRequest.bind(this)} text={this.state.message} data={this.state.messages} change={this.handleChange.bind(this)} submit={this.handleSubmit.bind(this)}/>;
    }
        return (
          <Router>
             <div className="container grid-container">
               <Switch>
                   <Route  exact path="/"  render={()=>this.component }/>
                   <Route path="/profile" component={Profile} />
               </Switch>
             </div>
           </Router>
        );
  }
}

export default App;

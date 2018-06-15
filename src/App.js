import React, { Component } from 'react';
import openSocket from 'socket.io-client';
import Home from "./Home";
import Navbar from './Navbar';
import Socket from './Socket';
import './app.css'

class App extends Component {

  constructor(props){
    super(props);
    this.socket = openSocket('http://localhost:3001');
    this.state = {poop : "SD", message:"", display: "poop"};
  }

  componentDidMount(){
    this.getRequest();
  //  var inputComponent = document.getElementById("test");
    //inputComponent.addEventListener("change", ()=>{)});

  }

  getRequest(){
    var data = {};

    const API = "http://localhost:3001/api";
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
    const API = "http://localhost:3001/api";
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
    var temp = this.state.display;
    this.socket.emit('message', {
      user: "poop",
      message: this.state.message
    });

    this.socket.on('message', (data)=>{this.setState({display: `${temp} ${data.message}`})})
  }

  render() {
    return (
      <div className="container grid-container">
        <Navbar />
        <Home message={this.state.display} change={this.handleChange.bind(this)} submit={this.handleSubmit.bind(this)}/>
          <h1>{this.state.poop}</h1>
          //<Socket />
      </div>
    );
  }
}

export default App;
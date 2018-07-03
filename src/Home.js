import React from 'react';
import Navbar from './Navbar';
import ChatWindow from './ChatWindow';


class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.load();
  }
  render(){
    return (
      <div>
      <div className="nav-container">
      <Navbar user={this.props.user} logout={this.props.logout}/>
      </div>
      <div>
        <ChatWindow data={this.props.data} />
      </div>
      <div className="input-group grid-bottom">
        <input className="form-control space" id="test" placeholder="Type to chat.." onChange={this.props.change} value={this.props.text}/>
        <span className="input-group-btn">
        <button className="btn btn-default" type="button" onClick={this.props.submit}>Send!</button>
        </span>
      </div>
      </div>
    );
  }
}

export default Home;

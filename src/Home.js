import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (

      <div className="input-group grid-bottom">
          <div>
          {this.props.message}
          </div>
        <input className="form-control space" id="test" placeholder="Type to chat.." onChange={this.props.change}/>
        <span className="input-group-btn">
        <button className="btn btn-default" type="button" onClick={this.props.submit}>Send!</button>
   </span>
      </div>
    );
  }
}

export default Home;

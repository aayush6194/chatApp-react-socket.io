import React from 'react';

class Start extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (


      <div className="row vertical-align">

            <input className="form-control" /> <button className="btn btn-primary" onClick={()=>{window.location="http://localhost:3000/home"}}>Submit</button>
      </div>
    );
  }
}

export default Start;

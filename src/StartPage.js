import React from 'react';

class Start extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (


      <div className="row vertical-align">

            <input className="form-control" /> <button className="btn btn-primary" onClick={()=>{alert()}}>Submit</button>
      </div>
    );
  }
}

export default Start;

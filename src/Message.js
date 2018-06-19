import React from 'react';


class Message extends React.Component {
  constructor(props){
    super(props);

  }

  messages(list){
    return list.map((x)=>{ return (<div className="chat"><li key={x.toString()}>{x}</li></div>)});
  }

  render(){
    return (
      <div>
      <ul>
      {this.messages(this.props.data)}
        </ul>
      </div>
    );
  }
}

export default Message;

import React from 'react';


class Message extends React.Component {
  constructor(props){
    super(props);

  }

  messages(list){
    return list.map((x)=>{ return (<div className={x.type +"chat "+ "chat"}><li className={x.type} key={x.toString()}><div className="message">{x.content}</div><div className="date">{x.date.substring(0, 10)}</div> </li></div>)});
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

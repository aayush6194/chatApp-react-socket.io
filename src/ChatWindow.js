import React from 'react';

import Message from './Message';

class ChatWindow extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>


        <Message data={this.props.data}/>

      </div>
    );
  }
}

export default ChatWindow;

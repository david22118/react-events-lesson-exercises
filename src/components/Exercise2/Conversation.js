import React, { Component } from 'react';

class Conversation extends Component {
  //should recieve the prop "convo"
  arry(){
  let conversations=this.props.conversations
  let Name= this.props.displayConversation
  let index=conversations.findIndex(c=>c.with==Name)
  let arry = conversations[index]
  return arry
  }
  goBack=()=>{
   this.props.goBack() 
  }
  render() {
    return (
      <div >
        <button className="Back" onClick={this.goBack}>Back</button>
        {this.arry().convo.map(c=><div><span className="sender">{c.sender=="self"?"Me":this.arry().with}</span>: {c.text}</div>)}{/* should render an array of messages, 
        with each message in a separate div */}

        {/* You should wrap the sender in span with the class "sender" */}
        {/* When the sender is other you should display 
                  the name of the sender in the span*/}
        {/* When the sender is self, you should display "Me" in the span */}

        {/* You should render a back button with the class "back" 
            When clicked it should set the state of displayConversation to null*/}
      </div>
    );
  }
}

export default Conversation;

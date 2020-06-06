import React, { Component } from 'react';
import List from './List'
import Conversation from './Conversation'
class Exercise2 extends Component {
  constructor() {
    super()
    this.state = {
      displayConversation: null,
      conversations: [
        {
          with: "Laura", convo: [
            { text: "Hi", sender: "self" },
            { text: "You there?", sender: "self" },
            { text: "Yeah, hi, what's up?", sender: "other" }
          ]
        },
        {
          with: "Dad", convo: [
            { text: "Have you finished your school work yet?", sender: "other" },
            { text: "Yes.", sender: "self" },
            { text: "What do you mean, yes?", sender: "other" },
            { text: "??", sender: "self" }
          ]
        },
        {
          with: "Shoobert", convo: [
            { text: "Shoobert!!!", sender: "self" },
            { text: "Dude!!!!!!!!", sender: "other" },
            { text: "Shooooooooo BERT!", sender: "self" },
            { text: "You're my best friend", sender: "other" },
            { text: "No, *you're* my best friend", sender: "self" },
          ]
        }
      ]
    }
  }
  
  goBack=()=>{
    let displayConv =null
    let newConversations=[...this.state.conversations]
    this.setState({
      displayConversation:displayConv,
      conversations:newConversations
     })
  }
  
  displayConvo=(Name)=>{
   let displayConv=Name
   this.setState({
    displayConversation:displayConv,
    
   })
  }

  render() {
    return (
      <div >
        {this.state.displayConversation?<Conversation displayConversation={this.state.displayConversation}  goBack={this.goBack} conversations={this.state.conversations} /> 
        :< List list={this.state.conversations} displayConvo={this.displayConvo}/>}
      </div>
    );
  }
}

export default Exercise2;

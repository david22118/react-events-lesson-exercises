import React, { Component } from 'react';
import Contact from "./Contact"
class List extends Component {
  //should recieve the prop "contact"
 
  render() {
    return (
      <div >
        {this.props.list.map(l=><Contact name={l.with} displayConvo={this.props.displayConvo}/>)}
      </div>
    );
  }
}

export default List;

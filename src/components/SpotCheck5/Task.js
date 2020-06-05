import React, { Component } from "react";

class Task extends Component {
  complete = () => {;
  this.props.markComplete(this.props.text)
  }
  render() {
    return (
      <div>
        <span>
          {this.props.text} - <button className={this.props.class} onClick={this.complete}>Complete</button>
        </span>
      </div>
    );
  }
}

export default Task;

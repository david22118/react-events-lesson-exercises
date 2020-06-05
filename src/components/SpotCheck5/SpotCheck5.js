import React, { Component } from 'react';
import Task from './Task';
class SpotCheck5 extends Component {

  // Each task should be desplayed with a Task component.
  // Each Task should display the task's text, and a Complete button with the class "complete"
  // However, SpotCheck5 should filter out the tasks whose complete is true
  // Clicking the Complete button should change that task's complete to true in App's state

  constructor() {
    super()
    this.state = {
      tasks: [
        { text: "Take out trash", complete: false },
        { text: "Trash talk Carrie", complete: true },
        { text: "Carry boxes upstairs", complete: false }
      ]
    }
  }

  markComplete = text => {
   let newTasks=[...this.state.tasks]
   let task= newTasks.find(t=>t.text==text)
   task.complete=true
  /*  let index =newTasks.findIndex(n=>n.complete==true)
   newTasks.splice(index,1) */
   this.setState({
    tasks:newTasks
   })
  }

  render() {
   
    return (
      <div>
        {this.state.tasks.filter(s=>!s.complete).map(t=>{
         return(
               <div><Task class={"complete"} text={t.text} markComplete={this.markComplete} /></div>
         )
        })}
      </div>
    )
  }
}

export default SpotCheck5;

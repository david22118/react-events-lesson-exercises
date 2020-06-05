import React, { Component } from 'react';

class Img extends Component {
    shiftImageBack=()=>{
    this.props.shiftImageBack(this.props.img)
    }
    shiftImageForward=()=>{
        this.props.shiftImageForward(this.props.img)
    }
    render() { 
        return (<div>
            <div> <button onClick={this.shiftImageBack} className="back">back</button>
            <img src={this.props.img}></img>
            <button onClick={this.shiftImageForward} className="forward">forward</button></div>
           
        </div>  );
    }
}
 
export default Img;
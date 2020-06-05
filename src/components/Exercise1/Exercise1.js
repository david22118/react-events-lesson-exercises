import React, { Component } from "react";
import Img from "./img";
class Exercise1 extends Component {
  constructor() {
    super();
    this.state = {
      images: [
        "http://www.agr.gc.ca/resources/prod/img/discover-decouvrez/potatoes300x210.jpg",
        "https://img.purch.com/rc/300x200/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA3Ni85MTYvb3JpZ2luYWwvc3BpbmFjaC5qcGc=",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PerfectStrawberry.jpg/220px-PerfectStrawberry.jpg",
      ],
      currentImg: 0,
    };
  }
  shiftImageBack = (image) => {
    // this should reduce currentImg by 1
    let newImages = [...this.state.images];
    let index = newImages.findIndex((n) => n == image);

    let newCurrentImg = this.state.currentImg;
    if (index === 0) {
      newCurrentImg = 2;
    } else {
      newCurrentImg = this.state.currentImg - 1;
    }
    this.setState({
      currentImg: newCurrentImg,
    });
  };
  shiftImageForward = (image) => {
    // shiftImageForward - this should increase currentImg by 1
    let newImages = [...this.state.images];
    let index = newImages.findIndex((n) => n == image);

    let newCurrentImg = this.state.currentImg;
    if (index === newImages.length - 1) {
      newCurrentImg = 0;
    } else {
      newCurrentImg = this.state.currentImg + 1;
    }
    this.setState({
      currentImg: newCurrentImg,
    });
  };

  render() {
    return (
      <div>
        <Img
          key={this.state.currentImg}
          img={this.state.images[this.state.currentImg]}
          shiftImageBack={this.shiftImageBack}
          shiftImageForward={this.shiftImageForward}
        />
      </div>
    );
  }
}

export default Exercise1;

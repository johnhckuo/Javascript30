import React from "react"
import sound from "./sounds"

import * as Style from "./style.js"

export default class Drum extends React.Component{
  constructor(){
    super();
    this.state = { 
      active: -1
    }
  }

  handleKeyPress(e){
    if (typeof sound[e.keyCode] !== "undefined"){
      let audio = new Audio(sound[e.keyCode].src);
      audio.play();
      this.setState({
        active: e.keyCode
      })
    }
  }
  handleKeyUp(e){
    this.setState({
      active: -1
    })
  }

  componentDidMount(){
    document.addEventListener("keydown", this.handleKeyPress.bind(this), false);
    document.addEventListener("keyup", this.handleKeyUp.bind(this), false);

  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.handleKeyPress.bind(this), false);
    document.removeEventListener("keyup", this.handleKeyUp.bind(this), false);
  }

  render(){
    return (
      <Style.Container>
        <Style.Keys>
          {

            Object.keys(sound).map((index=>{
              let obj = sound[index];
              return (
                <Style.Key data={index} key={index} active={this.state.active}>
                  <Style.Kbd>{obj.kbd}</Style.Kbd>
                  <Style.Sound>{obj.name}</Style.Sound>
                </Style.Key>
              );
            }))

          }
        </Style.Keys>
      </Style.Container>
    );
  }



}

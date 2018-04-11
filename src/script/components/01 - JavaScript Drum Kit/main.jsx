import React from "react"
import sound from "./sounds"

import * as Style from "./style.js"

export default class Drum extends React.Component{
  constructor(){
    super();
    this.state = {
      active: {}
    }
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleTransitionEnd = this.handleTransitionEnd.bind(this);
  }

  handleKeyPress(e){
    if (typeof sound[e.keyCode] !== "undefined"){
      let audio = new Audio(sound[e.keyCode].src);
      audio.play();
      this.setState({
        active: {...this.state.active, [e.keyCode]: true}
      })
    }
  }

  handleTransitionEnd(e){
    if (e.propertyName !== "transform") return;
    this.setState({
      active: {...this.state.active, [e.target.getAttribute("data")]: false}
    })
  }

  componentDidMount(){
    document.addEventListener("keydown", this.handleKeyPress, false);
    document.addEventListener("transitionend", this.handleTransitionEnd, false);

  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.handleKeyPress, false);
    document.removeEventListener("transitionend", this.handleTransitionEnd, false);
  }

  render(){
    return (
      <Style.Container>
        <Style.Keys>
          {

            Object.keys(sound).map((index=>{
              let obj = sound[index];
              return (
                <Style.Key data={index} key={index} active={this.state.active[index]}>
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

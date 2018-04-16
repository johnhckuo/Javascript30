import React from "react"

import * as Style from "./style"

export default class Clock extends React.Component{
  constructor(){
    super();
    this.getCurrentTime = this.getCurrentTime.bind(this);
    this.state={hour:null, minute: null, second: null};
  }

  componentDidMount(){
    this.counter = setInterval(this.getCurrentTime, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.counter);
  }

  getCurrentTime(){
    let d = new Date();
    let hour = d.getHours();
    let minute = d.getMinutes();
    let second = d.getSeconds();
    this.setState({
      hour,
      minute,
      second
    });
  }

  render(){
    return (
      <Style.Container>
        <Style.Clock>
          <Style.HourHand transform={this.state.hour*(360/24) + (360/24)*(this.state.minute/60)}/>
          <Style.MinuteHand transform={this.state.minute*(360/60) + (360/60)*(this.state.second/60)}/>
          <Style.SecondHand transform={this.state.second*(360/60)}/>
          <Style.Center />
        </Style.Clock>
      </Style.Container>
    );
  }
}

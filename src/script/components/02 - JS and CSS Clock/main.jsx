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
        <div>tsetset</div>
        <Style.HourHand degree={()=>{return this.state.hour*15}}/>
        <Style.MinuteHand degree={()=>{return this.state.minute*6}}/>
        <Style.SecondHand degree={()=>{return this.state.second*6}}/>
      </Style.Container>
    );
  }
}

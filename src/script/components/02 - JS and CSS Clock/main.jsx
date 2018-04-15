import React from "react"

import * as Style from "./style"

export default class Clock extends React.Component{
  constructor(){
    super();
    this.getCurrentTime = this.getCurrentTime.bind(this);
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
    console.log(hour, minute, second)
  }

  render(){
    return (<div></div>);
  }
}

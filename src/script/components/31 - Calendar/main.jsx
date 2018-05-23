import React from "react"

import * as Style from "./style.js"
import Header from "./Header/main"
import Content from "./Content/main"

export default class Calendar extends React.Component{
  constructor(props){
    super(props);
    var date = new Date();
    this.state = {
      day: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
    };
    this.updateDate = this.updateDate.bind(this);
    this.daysInMonth = this.daysInMonth.bind(this);
  }

  daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

  updateDate(year, month, day){
    this.setState({
      year,
      month,
      day: this.daysInMonth(day)
    })
  }

  render(){
    return (
      <Style.Container>
        <Header day={this.state.day} month={this.state.month} year={this.state.year} updateDate={this.updateDate}/>
        <Content />
      </Style.Container>
    );
  }
}

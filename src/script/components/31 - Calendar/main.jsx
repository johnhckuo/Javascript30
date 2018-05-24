import React from "react"

import * as Style from "./style.js"
import Header from "./Header/main"
import Content from "./Content/main"

export default class Calendar extends React.Component{
  constructor(props){
    super(props);
    var date = new Date();
    this.state = {
      date: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
    };
    this.updateDate = this.updateDate.bind(this);
  }

  updateDate(year, month, date){
    this.setState({
      year,
      month,
      date
    })
  }

  render(){
    return (
      <Style.Container>
        <Header date={this.state.date} month={this.state.month} year={this.state.year} updateDate={this.updateDate}/>
        <Content date={this.state.date} month={this.state.month} year={this.state.year} updateDate={this.updateDate} />
      </Style.Container>
    );
  }
}

import React from "react"

import * as Style from "./style.js"
import Header from "./Header/main"
import Content from "./Content/main"

export default class Calendar extends React.Component{
  constructor(props){
    super(props);
    var date = new Date();
    this.state = {
      selectedDate: date.getDate(),
      selectedMonth: date.getMonth(),
      selectedYear: date.getFullYear(),
      currentYear: date.getFullYear(),
      currentMonth: date.getMonth()
    };
    this.updateSelectedDate = this.updateSelectedDate.bind(this);
    this.updateCurrentDate = this.updateCurrentDate.bind(this);
  }

  updateSelectedDate(selectedYear, selectedMonth, selectedDate){
    this.setState({
      selectedYear,
      selectedMonth,
      selectedDate
    })
  }

  updateCurrentDate(currentYear, currentMonth){
    this.setState({
      currentYear,
      currentMonth
    })
  }

  render(){
    return (
      <Style.Container>
        <Header currentMonth={this.state.currentMonth} currentYear={this.state.currentYear} selectedDate={this.state.selectedDate} selectedMonth={this.state.selectedMonth} selectedYear={this.state.selectedYear} updateCurrentDate={this.updateCurrentDate} updateSelectedDate={this.updateSelectedDate}/>
        <Content currentMonth={this.state.currentMonth} currentYear={this.state.currentYear} selectedDate={this.state.selectedDate} selectedMonth={this.state.selectedMonth} selectedYear={this.state.selectedYear} updateCurrentDate={this.updateCurrentDate} updateSelectedDate={this.updateSelectedDate}/>
      </Style.Container>
    );
  }
}

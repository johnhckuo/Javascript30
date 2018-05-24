import React from "react"

import * as Style from "./style"
import weekNames from "./WeekdayNames"
import Utils from "../Utils/main"
export default class Content extends React.Component{
  constructor(props){
    super(props);
    this.row = 6;
    this.column = 7;
    this.daysInMonth = this.daysInMonth.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

  handleDateChange(e, increment){
    const {date, month , year} = this.props;
    var newDate;
    newDate = Utils.calculateNewDate(year, (month+increment), date);
    this.props.updateDate(newDate.year, newDate.month, parseInt(e.target.innerHTML));
  }

  render(){
    const {date, month, year} = this.props;


    var d = new Date(year, month, 1);
    var startingDay = d.getDay();
    var weekDates = [];
    var weekDays = [];
    for (var i = 0 ; i < this.column ; i++){
      weekDays.push(weekNames[i]);
    }
    var previousMonthDays = this.daysInMonth(month, year);
    var currentMonthDays = this.daysInMonth((month+1)%12, year);

    var previousDate = [];
    for (var j = 0 ; j < startingDay ; j++){
      previousDate.push(previousMonthDays - startingDay + 1 + j);
    }

    var currentDate = [];
    for (var i = 1 ; i <= currentMonthDays ; i++){
      currentDate.push(i);
    }

    var nextDate = [];
    var nextRemainDateLength = this.column * this.row - currentMonthDays - previousDate.length;
    for (var k = 1 ; k <= nextRemainDateLength ; k++){
      nextDate.push(k);
    }

    return (
      <Style.Container>
        {
          weekDays.map((date)=> { return <span>{date}</span> })
        }
        {
          previousDate.map((date)=> { return <span onClick={(e)=>{this.handleDateChange(e, -1)}}>{date}</span> })
        }
        {
          currentDate.map((date)=> { return <span onClick={(e)=>{this.handleDateChange(e, 0)}}>{date}</span> })
        }
        {
          nextDate.map((date)=> { return <span onClick={(e)=>{this.handleDateChange(e, 1)}}>{date}</span> })
        }
      </Style.Container>
    );
  }
}

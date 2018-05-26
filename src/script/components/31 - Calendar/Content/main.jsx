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
    const {selectedDate, selectedMonth , selectedYear} = this.props;
    var newDate;
    newDate = Utils.calculateNewDate(selectedYear, (selectedMonth+increment), selectedDate);
    this.props.updateSelectedDate(newDate.year, newDate.month, parseInt(e.target.innerHTML));
    this.props.updateCurrentDate(newDate.year, newDate.month);
  }

  render(){
    const {selectedDate, selectedMonth, selectedYear, currentMonth, currentYear} = this.props;

    var d = new Date(currentYear, currentMonth, 1);
    var startingDay = d.getDay();
    var weekDates = [];
    var weekDays = [];
    for (var i = 0 ; i < this.column ; i++){
      weekDays.push(weekNames[i]);
    }
    var previousMonthDays = this.daysInMonth(currentMonth, currentYear);
    var currentMonthDays = this.daysInMonth((currentMonth+1)%12, currentYear);

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
          currentDate.map((date)=> { 
            if (date == selectedDate && selectedMonth == currentMonth && selectedYear == currentYear){
              return <span className="selected" onClick={(e)=>{this.handleDateChange(e, 0)}}>{date}</span> 
            }
            return <span onClick={(e)=>{this.handleDateChange(e, 0)}}>{date}</span> 

          })
        }
        {
          nextDate.map((date)=> { return <span onClick={(e)=>{this.handleDateChange(e, 1)}}>{date}</span> })
        }
      </Style.Container>
    );
  }
}

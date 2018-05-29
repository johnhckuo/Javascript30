import React from "react"

import * as Style from "./style"
import weekNames from "../Utils/WeekdayNames"
import monthNames from "../Utils/MonthNames"

import Utils from "../Utils/main"
export default class Content extends React.Component{
  constructor(props){
    super(props);
    this.row = 6;
    this.column = 7;
    this.daysInMonth = this.daysInMonth.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.showDate = this.showDate.bind(this);
    this.showYear = this.showYear.bind(this);
  }

  daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

  handleDateChange(e, increment){
    const {selectedDate, selectedMonth , selectedYear, currentYear, currentMonth, currentLayer} = this.props;
    if (currentLayer == 0){
      var newDate;
      newDate = Utils.calculateNewDate(currentYear, (currentMonth+increment));
      this.props.updateCurrentDate(newDate.year, newDate.month);

      if (increment == 0){
        this.props.updateSelectedDate(newDate.year, newDate.month, parseInt(e.target.innerHTML));
        this.props.toggleCalendar(null, false, null);
      }

    }else if (currentLayer == 1){
      var newMonth = parseInt(e.target.getAttribute('data-id'));
      this.props.updateCurrentDate(currentYear, newMonth);

      if (increment == 0){
        this.props.updateSelectedDate(selectedYear, newMonth, selectedDate);
        this.props.updateLayer(-1);
      }

    }else if (currentLayer == 2){
      var newYear = parseInt(e.target.innerHTML);
      this.props.updateCurrentDate(newYear, 0);

      if (increment == 0){
        this.props.updateSelectedDate(newYear, selectedMonth, selectedDate);
        this.props.updateLayer(-1);
      }

    }
  }

  showDate(currentYear, currentMonth){
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
    return {"weekDays": weekDays, "previousDate": previousDate, "currentDate": currentDate, "nextDate": nextDate};
  }

  showYear(){
    const {currentYear} = this.props;
    var year = currentYear.toString().slice(0, currentYear.toString().length-1);
    var startYear = parseInt(year + 0);
    var endYear = parseInt(year + 9);
    var date = [];
    for (var i = startYear-1 ; i <= endYear+1 ; i++){
      date.push(i)
    }
    return date;
  }

  render(){
    const {selectedDate, selectedMonth, selectedYear, currentMonth, currentYear, currentLayer} = this.props;

    if (currentLayer == 0){
      var {weekDays, previousDate, currentDate, nextDate} = this.showDate(currentYear, currentMonth);
      return (
        <Style.Container>
          {
            weekDays.map((date)=> { return <span key={`w${date}`}>{date}</span> })
          }
          {
            previousDate.map((date)=> { return <span className="gray" key={`p${date}`} onClick={(e)=>{this.handleDateChange(e, -1)}}>{date}</span> })
          }
          {
            currentDate.map((date)=> {
              if (date == selectedDate && selectedMonth == currentMonth && selectedYear == currentYear){
                return <span key={`c${date}`} className="selected" onClick={(e)=>{this.handleDateChange(e, 0)}}>{date}</span>
              }
              return <span key={`c${date}`} onClick={(e)=>{this.handleDateChange(e, 0)}}>{date}</span>

            })
          }
          {
            nextDate.map((date)=> { return <span className="gray" key={`n${date}`} onClick={(e)=>{this.handleDateChange(e, 1)}}>{date}</span> })
          }
        </Style.Container>
      );
    }else if (currentLayer == 1){
      return (
        <Style.Container>
          {
            monthNames.map((month, index)=>{
              var monthIndex = monthNames.indexOf(month);
              if (monthIndex == selectedMonth && selectedYear == currentYear){
                return <span key={index} className="highLevelDate selected" data-id={index} onClick={(e)=>this.handleDateChange(e, 0)}>{month}</span>
              }
              return <span key={index} className="highLevelDate" data-id={index} onClick={(e)=>this.handleDateChange(e, 0)}>{month}</span>
            })
          }
        </Style.Container>
      );
    }else if (currentLayer == 2){
      var years = this.showYear()
      return (
        <Style.Container>
          {
            years.map((year, index)=>{
              if (index == 0){
                return <span className="gray highLevelDate" key={index} onClick={(e)=>this.handleDateChange(e, -1)}>{year}</span>
              }else if (index == years.length-1){
                return <span className="gray highLevelDate" key={index} onClick={(e)=>this.handleDateChange(e, 1)}>{year}</span>
              }else{
                if (year == selectedYear){
                  return <span className="highLevelDate selected" key={index} onClick={(e)=>this.handleDateChange(e, 0)}>{year}</span>
                }
                return <span className="highLevelDate" key={index} onClick={(e)=>this.handleDateChange(e, 0)}>{year}</span>
              }
            })
          }
        </Style.Container>
      );
    }
    return null;

  }
}

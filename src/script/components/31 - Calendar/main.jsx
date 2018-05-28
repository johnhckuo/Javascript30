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
      currentMonth: date.getMonth(),
      currentLayer: 0,
      expand: false
    };
    this.updateLayer = this.updateLayer.bind(this);
    this.updateSelectedDate = this.updateSelectedDate.bind(this);
    this.updateCurrentDate = this.updateCurrentDate.bind(this);
    this.toggleCalendar = this.toggleCalendar.bind(this);
    this.updateManually = this.updateManually.bind(this);
  }

  updateLayer(offset){

    this.setState((prevState, props)=>{
      if (prevState.currentLayer + offset > 2 || prevState.currentLayer + offset < 0){
        return;
      }
      return {
        currentLayer: prevState.currentLayer + offset
      }
    });
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

  toggleCalendar(e, expand, type){
    this.setState({expand});
    if (expand == true){
      e.target.setSelectionRange(0, e.target.value)
    }

    if (type == "year"){
      this.setState({currentLayer: 2});
    }else if(type == "month"){
      this.setState({currentLayer: 1});
    }else if (type == "date"){
      this.setState({currentLayer: 0});
    }
  }

  updateManually(e, type){
    var value = e.target.value;
    if (parseInt(value) != value){
      return;
    }
    if (type === "year"){
      this.setState({selectedYear: value});
      this.setState({currentYear: value});
    }else if (type === "month" && value <= 12 && value >= 1){
      this.setState({selectedMonth: value-1});
      this.setState({currentMonth: value-1});
    }else if (type === "date" && value <= 31 && value >= 1){
      this.setState({selectedDate: value});
    }
  }

  render(){
    return (
      <Style.Container>
        <h1>Select a date: </h1>
        <div className="inputContatiner">
          <input type="text" onChange={(e)=>{this.updateManually(e, 'year')}} onClick={(e)=>{this.toggleCalendar(e, true, 'year')}} value={this.state.selectedYear} />
          <input type="text" onChange={(e)=>{this.updateManually(e, 'month')}} onClick={(e)=>{this.toggleCalendar(e, true, 'month')}} value={this.state.selectedMonth+1} />
          <input type="text" onChange={(e)=>{this.updateManually(e, 'date')}} onClick={(e)=>{this.toggleCalendar(e, true, 'date')}} value={this.state.selectedDate} />
        </div>
        {
          this.state.expand == true &&
          <span>
            <Header
              currentLayer={this.state.currentLayer}
              updateLayer={this.updateLayer}
              currentMonth={this.state.currentMonth}
              currentYear={this.state.currentYear}
              selectedDate={this.state.selectedDate}
              selectedMonth={this.state.selectedMonth}
              selectedYear={this.state.selectedYear}
              updateCurrentDate={this.updateCurrentDate}
              updateSelectedDate={this.updateSelectedDate}
            />
            <Content
              currentLayer={this.state.currentLayer}
              updateLayer={this.updateLayer}
              currentMonth={this.state.currentMonth}
              currentYear={this.state.currentYear}
              selectedDate={this.state.selectedDate}
              selectedMonth={this.state.selectedMonth}
              selectedYear={this.state.selectedYear}
              updateCurrentDate={this.updateCurrentDate}
              updateSelectedDate={this.updateSelectedDate}
              toggleCalendar={this.toggleCalendar}
            />
          </span>

        }

      </Style.Container>
    );
  }
}

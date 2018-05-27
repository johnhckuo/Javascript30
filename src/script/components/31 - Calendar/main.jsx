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

  toggleCalendar(expand){
    this.setState({expand});
  }

  updateManually(e){
    console.log(e.target.value)
  }

  render(){
    return (
      <Style.Container>
        <div className="inputContatiner">
          <input type="text" onChange={this.updateManually} onClick={()=>{this.toggleCalendar(true)}} value={this.state.currentYear} />
          <input type="text" onChange={this.updateManually} onClick={()=>{this.toggleCalendar(true)}} value={this.state.currentMonth+1} />
          <input type="text" onChange={this.updateManually} onClick={()=>{this.toggleCalendar(true)}} value={this.state.selectedDate} />
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

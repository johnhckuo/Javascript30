import React from "react"

import * as Style from "./style"
import monthNames from "./MonthNames"
import Utils from "../Utils/main"

export default class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentLayer: 0
    };
    this.changeLayer = this.changeLayer.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  changeLayer(offset){
    if (this.state.currentLayer >= 1 || this.state.currentLayer < 0){
      return;
    }
    this.setState((prevState, props)=> ({
      currentLayer: prevState.currentLayer + offset
    }));
  }

  handleDateChange(offset){
    const {currentMonth, currentYear} = this.props;
    var newYear, newMonth;
    if (this.state.currentLayer == 0){
      var newDate = Utils.calculateNewDate(currentYear, currentMonth + offset)
      newYear = newDate.year;
      newMonth = newDate.month;
    }else{
      newYear = currentYear + offset;
    }

    if (newYear < 0){
      return;
    }
    this.props.updateCurrentDate(newYear, newMonth);

  }


  render(){
    const {currentMonth, currentYear} = this.props;
    const {currentLayer} = this.state;
    var currentDate;
    switch (currentLayer){
      case 0:
        currentDate = `${monthNames[currentMonth]} ${currentYear}`;
        break;
      case 1:
        currentDate = currentYear;
        break;
    }
    return (
      <Style.Container>

          <Style.Arrow>
            <div onClick={()=>{this.handleDateChange(-1)}}>&lt;</div>
            <div onClick={()=>{this.handleDateChange(1)}}>&gt;</div>
          </Style.Arrow>
          <Style.Date onClick={()=>this.changeLayer(1)}>
            {currentDate}
          </Style.Date>
      </Style.Container>
    );
  }
}

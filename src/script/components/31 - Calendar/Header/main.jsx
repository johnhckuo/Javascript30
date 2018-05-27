import React from "react"

import * as Style from "./style"
import monthNames from "../Utils/MonthNames"
import Utils from "../Utils/main"

export default class Header extends React.Component{
  constructor(props){
    super(props);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleLayerChange = this.handleLayerChange.bind(this);
  }

  handleLayerChange(offset){
    this.props.updateLayer(offset);
  }

  handleDateChange(offset){
    const {currentMonth, currentYear, currentLayer} = this.props;
    var newYear, newMonth;
    if (currentLayer == 0){
      var newDate = Utils.calculateNewDate(currentYear, currentMonth + offset)
      newYear = newDate.year;
      newMonth = newDate.month;
    }else if (currentLayer == 1){
      newYear = currentYear + offset;
      newMonth = 0;
    }else if (currentLayer == 2){
      newYear = currentYear + offset*10;
      newMonth = 0;
    }

    if (newYear < 0){
      return;
    }
    this.props.updateCurrentDate(newYear, newMonth);

  }


  render(){
    const {currentMonth, currentYear, currentLayer} = this.props;
    var currentDate;
    switch (currentLayer){
      case 0:
        currentDate = `${monthNames[currentMonth]} ${currentYear}`;
        break;
      case 1:
        currentDate = currentYear;
        break;
      case 2:
        var year = currentYear.toString().slice(0, currentYear.toString().length-1)
        currentDate = `${year+0} - ${year+9}`;
        break;
    }
    return (
      <Style.Container>

          <Style.Arrow>
            <div onClick={()=>{this.handleDateChange(-1)}}>&lt;</div>
            <div onClick={()=>{this.handleDateChange(1)}}>&gt;</div>
          </Style.Arrow>
          <Style.Date onClick={()=>this.handleLayerChange(1)}>
            {currentDate}
          </Style.Date>
      </Style.Container>
    );
  }
}

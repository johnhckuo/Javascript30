import React from "react"

import * as Style from "./style.js"
import monthNames from "./MonthNames"

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
    var {day, month, year} = this.props;
    if (this.state.currentLayer == 0){
      month = month + offset;
      if ((month+1) > 12){
        month = month % 12;
        year++;
      }else if ((month+1) < 1){
        month = 11;
        year--;
      }
    }else{
      year = year + offset;
    }
    
    if (year < 0){
      return;
    }
    this.props.updateDate(year, month, day);

  }


  render(){
    const {day, month, year} = this.props;
    const {currentLayer} = this.state;
    var currentDate;
    switch (currentLayer){
      case 0:
        currentDate = `${monthNames[month]} ${year}`;
        break;
      case 1:
        currentDate = year;
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

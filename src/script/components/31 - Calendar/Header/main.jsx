import React from "react"

import * as Style from "./style.js"
import monthNames from "./MonthNames"

export default class Header extends React.Component{
  constructor(props){
    super(props);
    var date = new Date();
    this.state = {
      day: date.getDate(),
      month: monthNames[date.getMonth()],
      year: date.getFullYear()
    };
  }

  componentDidMount(){
  }


  render(){
    return (
      <Style.Container>

        <Style.Date>
          <Style.Arrow>
            <div>&lt;</div>
            <div>&gt;</div>
          </Style.Arrow>
          {`${this.state.month} ${this.state.year}`}
        </Style.Date>
      </Style.Container>
    );
  }
}

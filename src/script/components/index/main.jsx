import React from "react"

import {Drum, Clock, Filter, Calendar} from "../"
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'
import * as Style from "./style"

export default class Main extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      isActive: true
    }
  }

  render(){
    return (
      <Style.Container>
        <Style.Menu isActive = {this.state.isActive}>
          <Style.List><Link to="/01">Drum</Link></Style.List>
          <Style.List><Link to="/02">Clock</Link></Style.List>
          <Style.List><Link to="/03">Filter</Link></Style.List>
          <Style.List><Link to="/31">Calendar</Link></Style.List>
        </Style.Menu>
        <Style.Expand />
        <Route exact path="/01" component={Drum} ></Route>
        <Route exact path="/02" component={Clock} ></Route>
        <Route exact path="/03" component={Filter} ></Route>
        <Route exact path="/31" component={Calendar} ></Route>
      </Style.Container>
    );
  }
}

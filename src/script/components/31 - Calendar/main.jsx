import React from "react"

import * as Style from "./style.js"
import Header from "./Header/main"
import Content from "./Content/main"

export default class Calendar extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <Style.Container>
        <Header />
        <Content />
      </Style.Container>
    );
  }
}

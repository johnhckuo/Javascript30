import React from "react"

import * as Style from "./style.js"

export default class Content extends React.Component{
  constructor(props){
    super(props);
    this.row = 6;
    this.column = 7;
  }

  render(){
    return (
      <Style.Container>
        Content
      </Style.Container>
    );
  }
}

import React from "react"
import { connect } from "react-redux"

import * as Command from "../../actions/test"

@connect((store) => {
  return {
    test: store.test
  };
})

export default class Test extends React.Component {

	render(){
		const {test} = this.props;
		return <div>hehe</div>;
	}

}
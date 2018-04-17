import React from "react"
import * as Style from "./style"

export default class Filter extends React.Component{
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			blur: 0,
			spacing: 0,
		}
	}

	handleChange(type, e){
		var state = {};
		state[type] = e.target.value;
		this.setState(state);
	}

	render(){
		return(
			<Style.Container>
				<h2>Update CSS Variables with React</h2>

				<Style.Controls>
					<label htmlFor="space">spacing:</label>
					<Style.Input id="space"  value={this.state.spacing} data-sizing="px" onChange={(e)=>this.handleChange("spacing", e)}/>

					<label htmlFor="blur">Blur:</label>
					<Style.Input id="blur"  value={this.state.blur} data-sizing="px" onChange={(e)=>this.handleChange("blur", e)}/>

					<label htmlFor="base">Base Color</label>
					<Style.Input id="base" type="color" name="base" />
				</Style.Controls>

				<img src="https://source.unsplash.com/7bwQXzbF6KE/800x500" />
			</Style.Container>
		);
	}


}
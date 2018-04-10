import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'

import {Drum} from "./components"

import store from "./store"
import "../style/normalize.css"

const app = document.getElementById('app')

ReactDOM.render(<Provider store={store}>
<Router>
<div>
	<ul>
		<li><Link to="/01">Drum</Link></li>
	</ul>
	<hr/>
	<Route exact path="/01" component={Drum} ></Route>
</div>
</Router>
</Provider>, app);

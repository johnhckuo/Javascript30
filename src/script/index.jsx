import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'

import Test from "./components/test/main"
import Drum from "./components/01 - JavaScript Drum Kit/main"

import store from "./store"
import "../style/normalize.css"

const app = document.getElementById('app')

ReactDOM.render(<Provider store={store}>
<Router>
<div>
	<ul>
		<li><Link to="/">Index</Link></li>
		<li><Link to="/01">01</Link></li>
	</ul>
	<hr/>
	<Route exact path="/" component={Test}></Route>
	<Route path="/01" component={Drum} ></Route>
</div>
</Router>
</Provider>, app);

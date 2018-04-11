import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'

import Main from "./components/index/main"

import store from "./store"
import "../style/reset.css"

const app = document.getElementById('app')

ReactDOM.render(<Provider store={store}>
<Router>
	<Main />
</Router>
</Provider>, app);

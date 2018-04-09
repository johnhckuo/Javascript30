import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import Test from "./components/test/main"

import store from "./store"
// import "../style/reset.scss"

const app = document.getElementById('app')

ReactDOM.render(<Provider store={store}>
	<Test />
</Provider>, app);
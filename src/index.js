import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import * as serviceWorker from './serviceWorker';
import store from "./Components/Redux/ReduxStore";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
	<App />
		</Provider>
	</BrowserRouter>
	, document.getElementById('root'));


serviceWorker.unregister();

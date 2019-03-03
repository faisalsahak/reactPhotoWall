import React from 'react';
import ReactDOM from 'react-dom';
import './styles/stylesheet.css';
import Main from './Components/Main';
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(<BrowserRouter><Main/></BrowserRouter>, document.getElementById('root'));



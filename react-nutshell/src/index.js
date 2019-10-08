import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom"
import Nutshell from './components/Nutshell'
import Form from "react-bootstrap/Form";


ReactDOM.render(
    <Router>
      <Nutshell />
    </Router>
    , document.getElementById('root'))
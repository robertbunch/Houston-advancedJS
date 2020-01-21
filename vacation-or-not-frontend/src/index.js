import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NavBar from './NavBar';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import UploadLocation from './UploadLocation'


ReactDOM.render(
    <Router>
        <Route path = "/" component={NavBar} />
        <Route exact path = "/" component={App} />
        <Route exact path = "/new-location" component={UploadLocation} />
    </Router>, 
    document.getElementById('root')
);


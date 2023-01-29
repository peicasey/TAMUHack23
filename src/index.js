import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById("root"));

ReactDOM.render(
    <BrowserRouter>
        <App />, document.getElementById('root')
    </BrowserRouter>
);

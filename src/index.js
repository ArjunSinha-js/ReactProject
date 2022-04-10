import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {styledField, Btn} from "./App";

const intorpolation = "Hello Ass"

const rootElement = document.getElementById('root');

const root = createRoot(rootElement);


const Elem = (
    <>
        <input style={styledField} type="text" placeholder="ass"/>
    </>

)
root.render(
    <>
        <App />
    </>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

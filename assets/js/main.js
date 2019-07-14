import React from 'react';
import ReactDOM from 'react-dom';
// import {Questions, questionsData} from './questions';
import {Calculator} from './calculator';
import '../scss/main.scss';

// Questions components
// ReactDOM.render(
    {/*<Questions questions={questionsData}/>,*/}
    // document.getElementById('questions'),
// );

ReactDOM.render(
    <Calculator/>,
    document.getElementById('calculator'),
);

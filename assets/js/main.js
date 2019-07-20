import React from 'react';
import ReactDOM from 'react-dom';
// import {Questions, questionsData} from './questions';
// import {Calculator} from './calculator';
import {ToDos} from './toDos';
import '../scss/main.scss';

// Questions
// ReactDOM.render(
    {/*<Questions questions={questionsData}/>,*/}
    // document.getElementById('questions'),
// );

// Calculator
// ReactDOM.render(
//     <Calculator/>,
//     document.getElementById('calculator'),
// );

ReactDOM.render(
    <ToDos/>,
    document.getElementById('todos'),
);

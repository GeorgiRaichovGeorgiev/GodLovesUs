import React from 'react';

// Work in progress
// Only the skeleton is made

export class Calculator extends React.Component {
    render() {
        return (
            <div className="calculator">
                <div className="calculator-result">0</div>
                <div className="calculator-controllers">
                    <div className="calculator-numbers">
                        <button className="clear">clear</button>
                        <button className="seven">7</button>
                        <button className="eight">8</button>
                        <button className="nine">9</button>
                        <button className="four">4</button>
                        <button className="five">5</button>
                        <button className="six">6</button>
                        <button className="one">1</button>
                        <button className="two">2</button>
                        <button className="three">3</button>
                    </div>
                    <div className="calculator-signs">
                        <button className="division">&divide;</button>
                        <button className="subtraction">&ndash;</button>
                        <button className="addition">+</button>
                        <button className="equal">=</button>
                    </div>
                </div>
            </div>
        );
    }
}

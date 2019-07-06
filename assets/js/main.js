import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import '../scss/main.scss';

const Test = () => {
    const list = [
        {
            pk: 1,
            question_text: 'Какво правиш?',
        },
        {
            pk: 2,
            question_text: 'Как си?',
        },
    ];

    return (
        <div>
            {list.map(item =>
                <TestChild key={item.pk} question={item.question_text}/>
            )}
        </div>
    );
};

const TestChild = props => <li><b>{props.question}</b></li>;

TestChild.propTypes ={
    question: PropTypes.string,
};

ReactDOM.render(<Test/>, document.getElementById('react'));

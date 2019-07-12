import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import '../scss/main.scss';

const Questions = () => {
    const questions = [
        {
            pk: 1,
            question_title: 'Какво правиш?',
        },
        {
            pk: 2,
            question_title: 'Как си?',
        },
    ];

    return (
        <div>
            {questions.map(question =>
                <Question key={question.pk} questionTitle={question.question_title}/>
            )}
        </div>
    );
};



export class Question extends React.Component {
    // class fields - state definition (without constructor)
    state = {
        counter: 0,
    };

    // class fields - method definition (without bounding)
    incrementCounter = () => {
        this.setState(state => ({
            counter: state.counter + 1,
        }), () => {
            console.log(`${this.props.questionTitle}: ${this.state.counter}`)
        });
    };

    render() {
        return (
            <li onClick={this.incrementCounter}>
                Въпрос: <QuestionTitle name={this.props.questionTitle}/>
            </li>
        );
    }
}

// propTypes validation
Question.propTypes = {
    questionTitle: PropTypes.string,
};



// Destructing props value
const QuestionTitle = ({name, state}) => {
    return <span>{name} ({state})</span>;
};

// propTypes validation
QuestionTitle.propTypes = {
    name: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
};

// defaultProps
QuestionTitle.defaultProps = {
    state: 'нов',
};


ReactDOM.render(<Questions/>, document.getElementById('react'));

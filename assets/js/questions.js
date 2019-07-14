import React, {Fragment} from "react";
import PropTypes from "prop-types";

export class Questions extends React.Component {
    constructor(props) {
        super(props);

        // new ref syntax
        this.wrapperRef = React.createRef();
        this.questionRef = React.createRef();
    }

    // class fields - method definition (without bounding)
    handleClickQuestionTitle = () => {
        console.log(this.wrapperRef.current.className);
        console.log(this.questionRef.current.imQuestion());
    };

    render() {
        return (
            <div className="questions-wrapper" ref={this.wrapperRef}>
                {this.props.questions.map(question =>
                    <Question
                        key={question.pk}
                        questionTitle={question.question_title}
                        handleClickQuestionTitle={this.handleClickQuestionTitle}
                        ref={this.questionRef}
                    />
                )}
            </div>
        );
    }
}

// propTypes validation
Questions.propTypes = {
    questions: PropTypes.array.isRequired,
};


export class Question extends React.Component {
    // class fields - state definition (without constructor)
    state = {
        counter: 0,
    };

    // class fields - method definition (without bounding)
    imQuestion = () => "I'm a Question component!";

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
                Въпрос:
                <QuestionTitle
                    name={this.props.questionTitle}
                    handleClickQuestionTitle={this.props.handleClickQuestionTitle}
                />
            </li>
        );
    }
}

// propTypes validation
Question.propTypes = {
    questionTitle: PropTypes.string.isRequired,
    handleClickQuestionTitle: PropTypes.func,
};



// Destructing props value
const QuestionTitle = ({name, state, handleClickQuestionTitle}) => {
    return (
        // Fragment
        <Fragment>
            <span onClick={handleClickQuestionTitle}>{name}</span>
            <span>({state})</span>
        </Fragment>
    );
};

// propTypes validation
QuestionTitle.propTypes = {
    name: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    handleClickQuestionTitle: PropTypes.func,
};

// defaultProps
QuestionTitle.defaultProps = {
    state: 'нов',
};



export const questionsData = [
    {
        pk: 1,
        question_title: 'Какво правиш?',
    },
    {
        pk: 2,
        question_title: 'Как си?',
    },
];

import React, { Component } from 'react';
import SimpleStorage from 'react-simple-storage';
import update from 'immutability-helper';
import CurrentTest from './CurrentTest';
import TestList from './TestList';
import TEST_LIST from '../../contstants/testList.json';

class Test extends Component {
  state = {
    modalQuestionVisible: false,
    modalResetVisible: false,
    resetBtn: false,
    openTest: false,
    activeAnswer: '',
    activeTestID: null,
    activeQuestion: 0,
    questions: [],
    tests: TEST_LIST,
    trainingMode: true,
    isSomeTestCompleted: false
  };

  giveAnswer = answer => {
    const { activeTestID, activeQuestion, questions, tests } = this.state;

    if (questions[activeQuestion]) {
      this.setState(
        {
          questions: update(questions, {
            [activeQuestion]: { answer: { $set: answer } }
          }),
          activeQuestion: activeQuestion + 1,
          activeAnswer: '',
          tests: update(tests, {
            [activeTestID - 1]: {
              questions: { [activeQuestion]: { answer: { $set: answer } } },
              activeQuestion: { $set: activeQuestion + 1 }
            }
          })
        },
        // Handler for last question
        () => this.giveAnswerForLastQuestion()
      );
    }
  };

  giveAnswerForLastQuestion = () => {
    const { activeTestID, activeQuestion, questions, tests } = this.state;

    if (activeQuestion === questions.length) {
      const updatedTest = update(tests, {
        [activeTestID - 1]: {
          status: { $set: 'finished' }
        }
      });

      setTimeout(() => {
        this.setState(
          {
            questions: [],
            activeQuestion: 0,
            activeAnswer: '',
            openTest: false,
            tests: updatedTest,
            trainingMode: false,
            isSomeTestCompleted: true
          },
          () => {
            if (tests[activeTestID + 3] && tests[activeTestID + 3].id) {
              this.setState({
                tests: update(updatedTest, {
                  [activeTestID + 3]: {
                    status: { $set: 'active' }
                  }
                })
              });
            } else {
              this.handleLastQuestion();
            }
          }
        );
      }, 1000);
    }
  };

  handleLastQuestion = () => {
    if (this.checkLast4Questions()) {
      this.props.handleComplitedAllTests(true);
    }
  };

  checkLast4Questions = () => {
    const { tests } = this.state;
    const getLast4Questions = tests.slice(tests.length - 4);
    const isAllTestsComplited = getLast4Questions.every(question => question.status === 'finished');

    return isAllTestsComplited;
  };

  setModalVisible = (state, modalName) => {
    switch (modalName) {
      case 'question':
        this.setState({ modalQuestionVisible: state });
        break;

      case 'resetTests':
        this.setState({ modalResetVisible: state });
        break;

      default:
        break;
    }
  };

  // for rirst 1-2 questions
  setActiveAnswer = answer => {
    const { activeQuestion, questions, trainingMode } = this.state;

    this.setState(
      { activeAnswer: answer },
      () =>
        (!trainingMode || (questions[activeQuestion] && !questions[activeQuestion].training)) &&
        this.giveAnswer(answer)
    );
  };

  showTest = (state, testID) => {
    const { tests } = this.state;

    if (state) {
      const getCurrentTest = tests.filter(test => test.id === testID)[0];
      this.setState({
        questions: getCurrentTest.questions,
        activeTestID: testID,
        activeQuestion: getCurrentTest.questions.filter(question => question.answer).length
      });
    } else {
      // clean current test
      this.setState({
        activeTestID: null
      });
    }

    this.setState({ openTest: state });
  };

  resetAllTests = () => {
    this.setState({ tests: TEST_LIST, isSomeTestCompleted: false }, () => {
      this.props.handleComplitedAllTests(false);
    });
  };

  render() {
    const {
      activeQuestion,
      modalQuestionVisible,
      modalResetVisible,
      openTest,
      activeAnswer,
      tests,
      questions,
      trainingMode,
      isSomeTestCompleted
    } = this.state;

    return (
      <div className="wrapper__tests">
        <SimpleStorage
          parent={this}
          prefix={'App'}
          blacklist={['modalQuestionVisible', 'modalResetVisible']}
        />

        {openTest ? (
          <CurrentTest
            activeAnswer={activeAnswer}
            activeQuestion={activeQuestion}
            modalQuestionVisible={modalQuestionVisible}
            modalResetVisible={modalResetVisible}
            questions={questions}
            trainingMode={trainingMode}
            giveAnswer={this.giveAnswer}
            setActiveAnswer={this.setActiveAnswer}
            setModalVisible={this.setModalVisible}
            showTest={this.showTest}
          />
        ) : (
          <TestList
            tests={tests}
            isSomeTestCompleted={isSomeTestCompleted}
            modalResetVisible={modalResetVisible}
            resetAllTests={this.resetAllTests}
            setModalVisible={this.setModalVisible}
            showTest={this.showTest}
          />
        )}
      </div>
    );
  }
}

export default Test;

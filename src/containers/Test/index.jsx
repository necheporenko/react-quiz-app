import React, { Component } from "react";
import SimpleStorage from "react-simple-storage";
import update from "immutability-helper";
import CurrentTest from "./CurrentTest";
import TestList from "./TestList";
import TEST_LIST from "./testsList";

class Test extends Component {
  state = {
    modalVisible: false,
    openTest: false,
    activeAnswer: "",
    activeTestID: null,
    activeQuestion: 0,
    questions: [],
    tests: TEST_LIST,
    trainingMode: true
  };

  giveAnswer = answer => {
    const { activeTestID, activeQuestion, questions, tests } = this.state;

    this.setState(
      {
        questions: update(questions, {
          [activeQuestion]: { answer: { $set: answer } }
        }),
        activeQuestion: activeQuestion + 1,
        activeAnswer: "",
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
  };

  giveAnswerForLastQuestion = () => {
    const { activeTestID, activeQuestion, questions, tests } = this.state;

    if (activeQuestion === questions.length) {
      const updatedTest = update(tests, {
        [activeTestID - 1]: {
          status: { $set: "finished" }
        }
      });

      setTimeout(() => {
        this.setState(
          {
            // questions: QUESTIONS,
            questions: [],
            activeQuestion: 0,
            openTest: false,
            tests: updatedTest,
            trainingMode: false
          },
          () => {
            if (tests[activeTestID + 3] && tests[activeTestID + 3].id) {
              this.setState({
                tests: update(updatedTest, {
                  [activeTestID + 3]: {
                    status: { $set: "active" }
                  }
                })
              });
            }
          }
        );
      }, 1000);
    }
  };

  setModalVisible = state => {
    this.setState({ modalVisible: state });
  };

  // for rirst 1-2 questions
  setActiveAnswer = answer => {
    const { activeQuestion, questions, trainingMode } = this.state;

    this.setState(
      { activeAnswer: answer },
      () => (!trainingMode || !questions[activeQuestion].training) && this.giveAnswer(answer)
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

  render() {
    const {
      activeQuestion,
      modalVisible,
      openTest,
      activeAnswer,
      tests,
      questions,
      trainingMode
    } = this.state;
    return (
      <div className="wrapper__tests">
        <SimpleStorage parent={this} prefix={"App"} blacklist={["modalVisible"]} />

        {openTest ? (
          <CurrentTest
            activeAnswer={activeAnswer}
            activeQuestion={activeQuestion}
            modalVisible={modalVisible}
            questions={questions}
            trainingMode={trainingMode}
            giveAnswer={this.giveAnswer}
            setActiveAnswer={this.setActiveAnswer}
            setModalVisible={this.setModalVisible}
            showTest={this.showTest}
          />
        ) : (
          <TestList tests={tests} showTest={this.showTest} />
        )}
      </div>
    );
  }
}

export default Test;

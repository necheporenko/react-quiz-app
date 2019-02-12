import React, { Component } from "react";
import update from "immutability-helper";
import CurrentTest from "./CurrentTest";
import TestList from "./TestList";
import TEST_LIST from "./testsList";

const QUESTIONS = [
  { question: "Do you like pineapple juice?", answer: "", training: true },
  { question: "Do you like green tea?", answer: "", training: true },
  { question: "Do you like black tea?", answer: "" },
  { question: "Do you like orange juice?", answer: "" },
  { question: "Do you like apple juice?", answer: "" }
];

class Test extends Component {
  state = {
    modalVisible: false,
    openTest: false,
    activeAnswer: "",
    activeTestID: null,
    activeQuestion: 0,
    questions: [],
    tests: TEST_LIST
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
            questions: { [activeQuestion]: { answer: { $set: answer } } }
          }
        })
      },
      () => {
        if (activeQuestion === questions.length - 1) {
          const updatedTest = update(tests, {
            [activeTestID - 1]: {
              status: { $set: "finished" }
            }
          });

          this.setState(
            {
              questions: QUESTIONS,
              activeQuestion: 0,
              openTest: false,
              tests: updatedTest
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
        }
      }
    );
  };

  setModalVisible = state => {
    this.setState({ modalVisible: state });
  };

  setActiveAnswer = answer => {
    const { activeQuestion, questions } = this.state;

    this.setState(
      { activeAnswer: answer },
      () => !questions[activeQuestion].training && this.giveAnswer(answer)
    );
  };

  showTest = (state, testID) => {
    const { tests } = this.state;

    if (state) {
      const getCurrentTest = tests.filter(test => test.id === testID)[0];
      this.setState({
        questions: getCurrentTest.questions,
        activeTestID: testID
      });
    } else {
      // clean current test
      this.setState({ activeTestID: null, questions: [], activeQuestion: 0 });
    }

    this.setState({ openTest: state });
  };

  render() {
    const { activeQuestion, modalVisible, openTest, activeAnswer, tests, questions } = this.state;
    return (
      <div className="wrapper__tests">
        {openTest && activeQuestion !== questions.length ? (
          <CurrentTest
            activeAnswer={activeAnswer}
            activeQuestion={activeQuestion}
            modalVisible={modalVisible}
            questions={questions}
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

import React, { Component } from "react";
import update from "immutability-helper";
import { Row, Progress, Modal } from "antd";
import Icon from "../../components/Icons";
import { ReactComponent as IconClose } from "../../components/Icons/actions/close.svg";
import { ReactComponent as IconCloseCircle } from "../../components/Icons/actions/close-circle.svg";
import { ReactComponent as IconSmile1 } from "../../components/Icons/smiles/smile-01.svg";
import { ReactComponent as IconSmile2 } from "../../components/Icons/smiles/smile-02.svg";
import { ReactComponent as IconSmile3 } from "../../components/Icons/smiles/smile-03.svg";
import { ReactComponent as IconSmile4 } from "../../components/Icons/smiles/smile-04.svg";
import { ReactComponent as IconSmile5 } from "../../components/Icons/smiles/smile-05.svg";
import TEST_LIST from "./testsList";

class ModalApp extends Component {
  state = {
    message: ""
  };

  handleChange = event => {
    this.setState({ message: event.target.value });
  };

  render() {
    const { modalVisible, setModalVisible, giveAnswer } = this.props;
    const { message } = this.state;
    return (
      <Modal
        visible={modalVisible}
        centered
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
        closable={false}
        footer={null}
      >
        <div className="wrapper__modal">
          <IconClose className="close" onClick={() => setModalVisible(false)} />
          <button
            className="btn"
            onClick={() => {
              giveAnswer("Irrelevant question");
              setModalVisible(false);
            }}
          >
            Irrelevant question
          </button>
          <button
            className="btn"
            onClick={() => {
              giveAnswer("Didn’t understand the question");
              setModalVisible(false);
            }}
          >
            Didn’t understand the question
          </button>
          <button
            className="btn"
            onClick={() => {
              giveAnswer("Stupid question");
              setModalVisible(false);
            }}
          >
            Stupid question
          </button>

          <label htmlFor="else">Something else: </label>
          <textarea
            id="else"
            name="else_answer"
            placeholder="Write your answer"
            value={message}
            onChange={this.handleChange}
          />

          <button
            className="send"
            onClick={() => {
              message && giveAnswer(message);
              message && setModalVisible(false);
            }}
            style={{ backgroundColor: message && "#00aff9" }}
          >
            Send
          </button>
        </div>
      </Modal>
    );
  }
}

const TestsList = ({ showTest, tests }) => (
  <div className="tests">
    <h2 className="tests__title">Check yourself</h2>
    <div className="tests__content">
      {tests.map(test => (
        <div
          className="tests__content__item"
          key={test.id}
          onClick={() => test.status === "active" && showTest(true, test.id)}
        >
          <Icon
            name={test.icon}
            finished={test.status === "finished" || false}
            active={test.status === "active" || false}
          />
          <div className="small-icon">
            <Icon
              name={test.iconXs}
              finished={test.status === "finished" || false}
              active={test.status === "active" || false}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const getAnswerLabel = smile => {
  switch (smile) {
    case "smile1":
      return "Definitely YES!";
    case "smile2":
      return "Maybe";
    case "smile3":
      return "Don't know";
    case "smile4":
      return "Most likely no";
    case "smile5":
      return "Definitely NO!";

    default:
      return null;
  }
};

const CurrentTest = ({
  activeAnswer,
  activeQuestion,
  modalVisible,
  giveAnswer,
  questions,
  setActiveAnswer,
  setModalVisible,
  showTest
}) => (
  <div className="test">
    <Row
      className="test__header"
      type="flex"
      align="middle"
      justify="space-between"
    >
      <div className="test__header__close" onClick={() => showTest(false)}>
        <IconClose />
      </div>
      <div className="test__header__progressbar">
        <Progress
          percent={(activeQuestion / questions.length) * 100}
          showInfo={false}
          strokeColor="#8AC82F"
        />
      </div>
    </Row>
    <div className="test__wrapper__content">
      <div className="test__question">
        <div className="test__question--close">
          <IconCloseCircle onClick={() => setModalVisible(true)} />
          <ModalApp
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            giveAnswer={giveAnswer}
          />
        </div>
        <p>
          {questions[activeQuestion]
            ? questions[activeQuestion].question
            : questions[activeQuestion - 1].question}
        </p>
      </div>
      <div className="test__marks">
        <Row
          className="test__marks--smiles"
          type="flex"
          align="middle"
          justify="space-between"
        >
          <IconSmile1
            className={activeAnswer === "smile1" ? "active" : null}
            onClick={() => setActiveAnswer("smile1")}
          />
          <IconSmile2
            className={activeAnswer === "smile2" ? "active" : null}
            onClick={() => setActiveAnswer("smile2")}
          />
          <IconSmile3
            className={activeAnswer === "smile3" ? "active" : null}
            onClick={() => setActiveAnswer("smile3")}
          />
          <IconSmile4
            className={activeAnswer === "smile4" ? "active" : null}
            onClick={() => setActiveAnswer("smile4")}
          />
          <IconSmile5
            className={activeAnswer === "smile5" ? "active" : null}
            onClick={() => setActiveAnswer("smile5")}
          />
        </Row>
      </div>
      <div className="test__answer">
        {activeAnswer && questions[activeQuestion].training ? (
          <div>
            <p>{getAnswerLabel(activeAnswer)}</p>
            <button className="btn" onClick={() => giveAnswer(activeAnswer)}>
              ANSWERED
            </button>
          </div>
        ) : (
          questions[activeQuestion].training && (
            <div className="test__answer__choose">Choose your answer…</div>
          )
        )}
      </div>
    </div>
  </div>
);

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
    const {
      activeQuestion,
      modalVisible,
      openTest,
      activeAnswer,
      tests,
      questions
    } = this.state;
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
          <TestsList tests={tests} showTest={this.showTest} />
        )}
      </div>
    );
  }
}

export default Test;

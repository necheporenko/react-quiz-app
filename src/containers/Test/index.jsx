import React, { Component } from "react";
import update from "immutability-helper";
import { Row, Progress, Modal, message } from "antd";
import Icon from "../../components/Icons";
import { ReactComponent as IconClose } from "../../components/Icons/actions/close.svg";
import { ReactComponent as IconCloseCircle } from "../../components/Icons/actions/close-circle.svg";
import { ReactComponent as IconSmile1 } from "../../components/Icons/smiles/smile-01.svg";
import { ReactComponent as IconSmile2 } from "../../components/Icons/smiles/smile-02.svg";
import { ReactComponent as IconSmile3 } from "../../components/Icons/smiles/smile-03.svg";
import { ReactComponent as IconSmile4 } from "../../components/Icons/smiles/smile-04.svg";
import { ReactComponent as IconSmile5 } from "../../components/Icons/smiles/smile-05.svg";

const ModalApp = ({ modalVisible, setModalVisible }) => (
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
      <button className="btn" onClick={() => setModalVisible(false)}>
        Irrelevant question
      </button>
      <button className="btn" onClick={() => setModalVisible(false)}>
        Didn’t understand the question
      </button>
      <button className="btn" onClick={() => setModalVisible(false)}>
        Stupid question
      </button>

      <label htmlFor="else">Something else: </label>
      <textarea id="else" name="else_answer" placeholder="Write your answer" />

      <button className="send" onClick={() => setModalVisible(false)}>
        Send
      </button>
    </div>
  </Modal>
);

const TestsList = ({ showTest }) => (
  <div className="tests">
    <h2 className="tests__title">Check yourself</h2>
    <div className="tests__content" onClick={() => showTest(true)}>
      <div className="tests__content__item">
        <Icon name="wind" finished />
        <div className="small-icon">
          <Icon name="xsWind" finished />
        </div>
      </div>
      <div className="tests__content__item">
        <Icon name="fire" finished />
        <div className="small-icon">
          <Icon name="xsWind" finished />
        </div>
      </div>
      <div className="tests__content__item">
        <Icon name="water" finished />
        <div className="small-icon">
          <Icon name="xsWind" finished />
        </div>
      </div>
      <div className="tests__content__item">
        <Icon name="earth" finished />
        <div className="small-icon">
          <Icon name="xsWind" finished />
        </div>
      </div>

      <div className="tests__content__item">
        <Icon name="wind" active />
        <div className="small-icon">
          <Icon name="xsFire" active />
        </div>
      </div>
      <div className="tests__content__item">
        <Icon name="fire" active />
        <div className="small-icon">
          <Icon name="xsFire" active />
        </div>
      </div>
      <div className="tests__content__item">
        <Icon name="water" active />
        <div className="small-icon">
          <Icon name="xsFire" active />
        </div>
      </div>
      <div className="tests__content__item">
        <Icon name="earth" active />
        <div className="small-icon">
          <Icon name="xsFire" active />
        </div>
      </div>

      <div className="tests__content__item">
        <Icon name="wind" />
        <div className="small-icon">
          <Icon name="xsWater" />
        </div>
      </div>
      <div className="tests__content__item">
        <Icon name="fire" />
        <div className="small-icon">
          <Icon name="xsWater" />
        </div>
      </div>
      <div className="tests__content__item">
        <Icon name="water" />
        <div className="small-icon">
          <Icon name="xsWater" />
        </div>
      </div>
      <div className="tests__content__item">
        <Icon name="earth" />
        <div className="small-icon">
          <Icon name="xsWater" />
        </div>
      </div>

      <div className="tests__content__item">
        <Icon name="wind" />
        <div className="small-icon">
          <Icon name="xsEarth" />
        </div>
      </div>
      <div className="tests__content__item">
        <Icon name="fire" />
        <div className="small-icon">
          <Icon name="xsEarth" />
        </div>
      </div>
      <div className="tests__content__item">
        <Icon name="water" />
        <div className="small-icon">
          <Icon name="xsEarth" />
        </div>
      </div>
      <div className="tests__content__item">
        <Icon name="earth" />
        <div className="small-icon">
          <Icon name="xsEarth" />
        </div>
      </div>
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
          />
        </div>
        {console.log(activeQuestion)}
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
    activeQuestion: 0,
    questions: QUESTIONS
  };

  giveAnswer = answer => {
    const { activeQuestion, questions } = this.state;

    this.setState(
      {
        questions: update(questions, {
          [activeQuestion]: { answer: { $set: answer } }
        }),
        activeQuestion: activeQuestion + 1,
        activeAnswer: ""
      },
      () => {
        if (activeQuestion === questions.length - 1) {
          message.success("Well done, test completed!", 2.5).then(() =>
            this.setState({
              questions: QUESTIONS,
              activeQuestion: 0,
              openTest: false
            })
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
      () =>
        !questions[activeQuestion].training &&
        setTimeout(() => {
          this.giveAnswer(answer);
        }, 400)
    );
  };

  showTest = state => {
    this.setState({ openTest: state });
  };

  render() {
    const {
      activeQuestion,
      modalVisible,
      openTest,
      activeAnswer,
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
          <TestsList showTest={this.showTest} />
        )}
      </div>
    );
  }
}

export default Test;

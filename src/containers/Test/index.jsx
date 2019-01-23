import React, { Component } from "react";
import { Row, Progress, Popover, Modal } from "antd";
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
    onOk={() => setModalVisible(false)}
    onCancel={() => setModalVisible(false)}
    closable={false}
    footer={null}
  >
    <div className="wrapper__modal">
      <div className="arrow" />
      <IconClose className="close" onClick={() => setModalVisible(false)} />
      <button className="btn">Irrelevant question</button>
      <button className="btn">Didn’t understand the question</button>
      <button className="btn">Stupid question</button>

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
        <Icon name="fire" finished />
        <div className="small-icon">
          <Icon name="xsFire" finished />
        </div>
      </div>
      <div className="tests__content__item">
        <Icon name="fire" active />
        <div className="small-icon">
          <Icon name="xsFire" active />
        </div>
      </div>
      <div className="tests__content__item">
        <Icon name="fire" />
        <div className="small-icon">
          <Icon name="xsFire" />
        </div>
      </div>
      <div className="tests__content__item">
        <Icon name="fire" />
        <div className="small-icon">
          <Icon name="xsFire" />
        </div>
      </div>

      <div className="tests__content__item">
        <Icon name="water" finished />
        <div className="small-icon">
          <Icon name="xsWater" finished />
        </div>
      </div>
      <div className="tests__content__item">
        <Icon name="water" active />
        <div className="small-icon">
          <Icon name="xsWater" active />
        </div>
      </div>
      <div className="tests__content__item">
        <Icon name="water" />
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
        <Icon name="wind" finished />
        <div className="small-icon">
          <Icon name="xsWind" finished />
        </div>
      </div>
      <div className="tests__content__item">
        <Icon name="wind" active />
        <div className="small-icon">
          <Icon name="xsWind" active />
        </div>
      </div>
      <div className="tests__content__item">
        <Icon name="wind" />
        <div className="small-icon">
          <Icon name="xsWind" />
        </div>
      </div>
      <div className="tests__content__item">
        <Icon name="wind" />
        <div className="small-icon">
          <Icon name="xsWind" />
        </div>
      </div>

      <div className="tests__content__item">
        <Icon name="earth" finished />
        <div className="small-icon">
          <Icon name="xsEarth" finished />
        </div>
      </div>
      <div className="tests__content__item">
        <Icon name="earth" active />
        <div className="small-icon">
          <Icon name="xsEarth" active />
        </div>
      </div>
      <div className="tests__content__item">
        <Icon name="earth" />
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

const CurrentTest = ({ modalVisible, setModalVisible, showTest }) => (
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
        <Progress percent={50} showInfo={false} strokeColor="#8AC82F" />
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
        <p>My Travel Plan are ussially well thought our.</p>
      </div>
      <div className="test__marks">
        <Row
          className="test__marks--smiles"
          type="flex"
          align="middle"
          justify="space-between"
        >
          <IconSmile1 />
          <IconSmile2 />
          <IconSmile3 />
          <IconSmile4 />
          <IconSmile5 />
        </Row>
      </div>
      <div className="test__answer">
        <div>
          <p>Definitely YES!</p>
          <button className="btn">ANSWERED</button>
        </div>
      </div>
    </div>
  </div>
);

class Test extends Component {
  state = {
    modalVisible: false,
    openTest: false
  };

  setModalVisible = state => {
    console.log(1);
    this.setState({ modalVisible: state });
  };

  showTest = state => {
    console.log(1);
    this.setState({ openTest: state });
  };

  render() {
    const { modalVisible, openTest } = this.state;
    return (
      <div className="wrapper__tests">
        {openTest ? (
          <CurrentTest
            setModalVisible={this.setModalVisible}
            modalVisible={modalVisible}
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

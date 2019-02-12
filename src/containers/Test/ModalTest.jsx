import React, { Component } from "react";
import { Modal } from "antd";
import { ReactComponent as IconClose } from "../../components/Icons/actions/close.svg";

class ModalTest extends Component {
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

export default ModalTest;

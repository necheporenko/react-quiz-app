import React, { Component } from 'react';

import { Row } from 'antd';
import { ReactComponent as IconAbout } from '../../components/Icons/about.svg';

class About extends Component {
  state = {
    message: ''
  };

  handleChange = event => {
    this.setState({ message: event.target.value });
  };

  sendForm = () => {
    setTimeout(() => {
      this.setState({ message: '' });
    }, 2000);
  };

  render() {
    const { message } = this.state;

    return (
      <div className="about">
        <Row className="about__content" type="flex" justify="center" align="middle">
          <IconAbout />
          <div className="about__content__description">The test uses the typology of</div>
          <div className="about__content__name">Carl Gustav Jung</div>
          <div className="about__content__label">We welcome any comments and suggestions:</div>
          <textarea
            id="about__message"
            name="about__message"
            className="textarea"
            placeholder="Write your answer"
            value={message}
            onChange={this.handleChange}
          />
          <button onClick={() => this.sendForm()} className="btn">
            SEND
          </button>
        </Row>
      </div>
    );
  }
}

export default About;

import React, { Component } from 'react';
import { Row } from 'antd';

class Info extends Component {
  render() {
    return (
      <div className="info">
        <Row className="info__content" type="flex" justify="center" align="middle">
          <span>1</span>
          <span>1</span>

          <span>1</span>
          <span>1</span>
          <span>1</span>
          <span>1</span>
        </Row>
      </div>
    );
  }
}

export default Info;

import React, { Component } from 'react';
import { Row } from 'antd';

import Icon from '../../components/Icons';

class Info extends Component {
  render() {
    return (
      <div className="info">
        <Row className="info__content" type="flex" justify="center" align="middle">
          <div className="element-icon__wrapper">
            <Icon name={'earth'} finished={true} active={true} />
            <div className="small-icon">
              <Icon
                name={'xsFire'}
                // finished={test.status === 'finished' || false}
                active={true}
              />
            </div>
          </div>
          <div className="info__content__title-abbreviation">ESTJ</div>
          <div className="info__content__title">Extraverted Sensing Thinking Judging</div>
          <div className="info__content__type">"Logistician"</div>
          <div className="info__content__test-result">
            According to the test results with a probability of 84% . Your personality type is ESTJ.
          </div>
          <button className="btn">Download PDF report</button>
          <div className="info__content__probability">
            The probability of other types according to the test:
          </div>

          <div className="info__content__probability-result">
            <span>ESTP 71%</span>
            <span>ENTP 54%</span>
            <span>ENTJ 47%</span>
          </div>
        </Row>
      </div>
    );
  }
}

export default Info;

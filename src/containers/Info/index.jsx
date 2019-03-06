import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'antd';

import Icon from '../../components/Icons';

class Info extends Component {
  render() {
    const { isComplitedAllTests } = this.props;

    return (
      <div className="info">
        <Row
          className="info__content"
          type="flex"
          justify="center"
          align="middle"
          style={{ opacity: isComplitedAllTests ? '1' : '0.07' }}
        >
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
            According to the test results with a probability of 84%. Your personality type is ESTJ.
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

        {!isComplitedAllTests && (
          <Row className="info__content-temporary" type="flex" justify="center" align="middle">
            <h2>
              The test results <br /> will be displayed here
            </h2>
            <Link to="/test">
              <button className="btn">TAKE A FREE TEST</button>
            </Link>
          </Row>
        )}
      </div>
    );
  }
}

export default Info;

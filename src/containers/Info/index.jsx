import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'antd';
import { PDFDownloadLink } from '@react-pdf/renderer';

import Icon from '../../components/Icons';
import PDF from '../../components/PDF';

import { ANSWER_ARRAY } from '../../contstants';

// import PDF from './PDF_report.pdf';

class Info extends Component {
  state = {
    icon: 'earth',
    iconXs: 'xsFire',
    abbreviation: 'ESTJ',
    title: 'Extraverted Sensing Thinking Judging',
    type: 'Executive'
  };

  componentDidMount() {
    if (this.props.isComplitedAllTests) {
      const answer = ANSWER_ARRAY[this.getRandomNumber(0, ANSWER_ARRAY.length)];

      this.setState({
        icon: answer.icon,
        iconXs: answer.iconXs,
        abbreviation: answer.abbreviation,
        title: answer.title,
        type: answer.type
      });
    }
  }

  getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  render() {
    const { isComplitedAllTests } = this.props;
    const { icon, iconXs, abbreviation, title, type } = this.state;

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
            <Icon name={icon} finished={true} active={true} />
            <div className="small-icon">
              <Icon name={iconXs} active={true} />
            </div>
          </div>
          <div className="info__content__title-abbreviation">{abbreviation}</div>
          <div className="info__content__title">{title}</div>
          <div className="info__content__type">"{type}"</div>
          <div className="info__content__test-result">
            According to the test results with a probability of {this.getRandomNumber(80, 95)}%.
            Your personality type is {type}.
          </div>
          {/* <a href={PDF} download="file.pdf">
            <button className="btn">Download PDF report</button>
          </a> */}

          <PDFDownloadLink document={<PDF title="Hello PDF" />} fileName="result.pdf">
            {({ blob, url, loading, error }) =>
              loading ? (
                <button className="btn">Creating PDF report...</button>
              ) : (
                <button className="btn">Download PDF report</button>
              )
            }
          </PDFDownloadLink>

          <div className="info__content__probability">
            The probability of other types according to the test:
          </div>

          <div className="info__content__probability-result">
            <span>
              {ANSWER_ARRAY[this.getRandomNumber(0, ANSWER_ARRAY.length)].abbreviation}{' '}
              {this.getRandomNumber(30, 80)}%
            </span>
            <span>
              {ANSWER_ARRAY[this.getRandomNumber(0, ANSWER_ARRAY.length)].abbreviation}{' '}
              {this.getRandomNumber(20, 75)}%
            </span>
            <span>
              {ANSWER_ARRAY[this.getRandomNumber(0, ANSWER_ARRAY.length)].abbreviation}{' '}
              {this.getRandomNumber(10, 65)}%
            </span>
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

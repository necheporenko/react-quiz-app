import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'antd';

import Icon from '../../components/Icons';

const ANSWER_ARRAY = [
  {
    icon: 'wind',
    iconXs: 'xsWind',
    abbreviation: 'INTJ',
    title: 'Introverted Intuitive Thinking Judging',
    type: 'Architect'
  },
  {
    icon: 'wind',
    iconXs: 'xsFire',
    abbreviation: 'ESFJ',
    title: 'Extraverted Sensing Feeling Judging',
    type: 'Consul'
  },
  {
    icon: 'wind',
    iconXs: 'xsWater',
    abbreviation: 'ENTP',
    title: 'Extraverted Intuitive Thinking Perceiving',
    type: 'Logician'
  },
  {
    icon: 'wind',
    iconXs: 'xsEarth',
    abbreviation: 'ISFP',
    title: 'Introverted Sensing Feeling Perceiving',
    type: 'Adventurer'
  },

  {
    icon: 'fire',
    iconXs: 'xsWind',
    abbreviation: 'INFP',
    title: 'Introverted Intuitive Feeling Perceiving',
    type: 'Mediator'
  },
  {
    icon: 'fire',
    iconXs: 'xsFire',
    abbreviation: 'ISTJ',
    title: 'Extraverted Sensing Thinking Perceiving',
    type: 'Entrepreneur'
  },
  {
    icon: 'fire',
    iconXs: 'xsWater',
    abbreviation: 'ENFJ',
    title: 'Extraverted Intuitive Feeling Judging',
    type: 'Protagonist'
  },
  {
    icon: 'fire',
    iconXs: 'xsEarth',
    abbreviation: 'ISTJ',
    title: 'Introverted Sensing Thinking Judging',
    type: 'Logistician'
  },

  {
    icon: 'water',
    iconXs: 'xsWind',
    abbreviation: 'INTP',
    title: 'Introverted Intuitive Thinking Perceiving',
    type: 'Logician'
  },
  {
    icon: 'water',
    iconXs: 'xsFire',
    abbreviation: 'ESFP',
    title: 'Extraverted Sensing Feeling Perceiving',
    type: 'Entertainer'
  },
  {
    icon: 'water',
    iconXs: 'xsWater',
    abbreviation: 'ENTJ',
    title: 'Extraverted Intuitive Thinking Judging',
    type: 'Commander'
  },
  {
    icon: 'water',
    iconXs: 'xsEarth',
    abbreviation: 'ISFJ',
    title: 'Introverted Sensing Feeling Judging',
    type: 'Defender'
  },

  {
    icon: 'earth',
    iconXs: 'xsWind',
    abbreviation: 'INFJ',
    title: 'Introverted Intuitive Feeling Judging',
    type: 'Advocate'
  },
  {
    icon: 'earth',
    iconXs: 'xsFire',
    abbreviation: 'ESTJ',
    title: 'Extraverted Sensing Thinking Judging',
    type: 'Executive'
  },
  {
    icon: 'earth',
    iconXs: 'xsWater',
    abbreviation: 'ENFP',
    title: 'Extraverted Intuitive Feeling Perceiving',
    type: 'Campaigner'
  },
  {
    icon: 'earth',
    iconXs: 'xsEarth',
    abbreviation: 'ISTP',
    title: 'Introverted Sensing Thinking Perceiving',
    type: 'Virtuoso'
  }
];

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
              <Icon
                name={iconXs}
                // finished={test.status === 'finished' || false}
                active={true}
              />
            </div>
          </div>
          <div className="info__content__title-abbreviation">{abbreviation}</div>
          <div className="info__content__title">{title}</div>
          <div className="info__content__type">"{type}"</div>
          <div className="info__content__test-result">
            According to the test results with a probability of {this.getRandomNumber(80, 95)}%.
            Your personality type is {type}.
          </div>
          <button className="btn">Download PDF report</button>
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

import React from 'react';
import Icon from '../../components/Icons';

const TestsList = ({ showTest, tests }) => (
  <div className="tests">
    <h2 className="tests__title">Check yourself</h2>
    <div className="tests__content">
      {tests.map(test => (
        <div
          className="tests__content__item"
          key={test.id}
          onClick={() => test.status === 'active' && showTest(true, test.id)}
        >
          <div>
            <Icon
              name={test.icon}
              finished={test.status === 'finished' || false}
              active={test.status === 'active' || false}
            />
            <div className="small-icon">
              <Icon
                name={test.iconXs}
                finished={test.status === 'finished' || false}
                active={test.status === 'active' || false}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TestsList;

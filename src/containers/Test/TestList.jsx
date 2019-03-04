import React from 'react';
import ModalReset from './ModalReset';
import Icon from '../../components/Icons';

const TestsList = ({
  tests,
  isSomeTestCompleted,
  modalResetVisible,
  showTest,
  setModalVisible,
  resetAllTests
}) => (
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

      {isSomeTestCompleted && (
        <>
          <ModalReset
            modalResetVisible={modalResetVisible}
            setModalVisible={setModalVisible}
            resetAllTests={resetAllTests}
          />

          <button className="btn" onClick={() => setModalVisible(true, 'resetTests')}>
            Reset all tests
          </button>
        </>
      )}
    </div>
  </div>
);

export default TestsList;

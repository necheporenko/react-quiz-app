import React from 'react';
import { Row, Progress } from 'antd';
import ModalTest from './ModalTest';
import { getAnswerLabel } from '../../contstants';
import { ReactComponent as IconClose } from '../../components/Icons/actions/close.svg';
import { ReactComponent as IconCloseCircle } from '../../components/Icons/actions/close-circle.svg';
import { ReactComponent as IconSmile1 } from '../../components/Icons/smiles/smile-01.svg';
import { ReactComponent as IconSmile2 } from '../../components/Icons/smiles/smile-02.svg';
import { ReactComponent as IconSmile3 } from '../../components/Icons/smiles/smile-03.svg';
import { ReactComponent as IconSmile4 } from '../../components/Icons/smiles/smile-04.svg';
import { ReactComponent as IconSmile5 } from '../../components/Icons/smiles/smile-05.svg';

const CurrentTest = ({
  activeAnswer,
  activeQuestion,
  modalQuestionVisible,
  giveAnswer,
  trainingMode,
  questions,
  setActiveAnswer,
  setModalVisible,
  showTest
}) => (
  <div className="test">
    <Row className="test__header" type="flex" align="middle" justify="space-between">
      <div className="test__header__close" onClick={() => showTest(false)}>
        <IconClose />
      </div>
      <div className="test__header__progressbar">
        <Progress
          percent={(activeQuestion / questions.length) * 100}
          showInfo={false}
          strokeColor="#8AC82F"
        />
      </div>
    </Row>
    <div className="test__wrapper__content">
      <div className="test__question">
        <div className="test__question--close">
          <IconCloseCircle onClick={() => setModalVisible(true, 'question')} />
          <ModalTest
            modalQuestionVisible={modalQuestionVisible}
            setModalVisible={setModalVisible}
            giveAnswer={giveAnswer}
          />
        </div>
        <p>
          {questions[activeQuestion]
            ? questions[activeQuestion].question
            : questions[activeQuestion - 1].question}
        </p>
      </div>
      <div className="test__marks">
        <Row className="test__marks--smiles" type="flex" align="middle" justify="space-between">
          <IconSmile1
            className={activeAnswer === 'smile1' ? 'active' : null}
            onClick={() => setActiveAnswer('smile1')}
          />
          <IconSmile2
            className={activeAnswer === 'smile2' ? 'active' : null}
            onClick={() => setActiveAnswer('smile2')}
          />
          <IconSmile3
            className={activeAnswer === 'smile3' ? 'active' : null}
            onClick={() => setActiveAnswer('smile3')}
          />
          <IconSmile4
            className={activeAnswer === 'smile4' ? 'active' : null}
            onClick={() => setActiveAnswer('smile4')}
          />
          <IconSmile5
            className={activeAnswer === 'smile5' ? 'active' : null}
            onClick={() => setActiveAnswer('smile5')}
          />
        </Row>
      </div>

      {activeAnswer &&
      trainingMode &&
      questions[activeQuestion] &&
      questions[activeQuestion].training ? (
        <div className="test__answer">
          <div>
            <p>{getAnswerLabel(activeAnswer)}</p>
            <button className="btn" onClick={() => giveAnswer(activeAnswer)}>
              ANSWERED
            </button>
          </div>
        </div>
      ) : (
        trainingMode &&
        questions[activeQuestion] &&
        questions[activeQuestion].training && (
          <div className="test__answer">
            <div className="test__answer__choose">Choose your answer…</div>
          </div>
        )
      )}
    </div>
  </div>
);

export default CurrentTest;

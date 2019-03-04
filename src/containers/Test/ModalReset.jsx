import React from 'react';
import { Modal } from 'antd';
import { ReactComponent as IconClose } from '../../components/Icons/actions/close.svg';

const ModalReset = ({ modalResetVisible, setModalVisible, resetAllTests }) => (
  <Modal
    visible={modalResetVisible}
    centered
    onOk={() => setModalVisible(false, 'resetTests')}
    onCancel={() => setModalVisible(false, 'resetTests')}
    closable={false}
    footer={null}
  >
    <div className="wrapper__modal modal-reset">
      <IconClose className="close" onClick={() => setModalVisible(false, 'resetTests')} />

      <h2>All data will be lost. Are you sure?</h2>
      <button
        className="btn"
        onClick={() => {
          resetAllTests();
          setModalVisible(false, 'resetTests');
        }}
      >
        RESET ALL DATA
      </button>
    </div>
  </Modal>
);

export default ModalReset;

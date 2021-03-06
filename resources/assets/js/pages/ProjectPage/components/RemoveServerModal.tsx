import * as React from 'react';
import Modal from '../../../components/Modal';

const RemoveServerModal = (props) => {
  const {
    isVisible,
    onModalHide,
    onRemoveServerClick,
  } = props;

  return (
    <Modal
      isVisible={ isVisible }
      id="server-remove-modal"
      title="Remove Server"
      buttons={[
        {
          text: 'Cancel',
          onPress: () => onModalHide()
        },
        {
          text: 'Remove Server from project',
          onPress: () => onRemoveServerClick()
        }
      ]}
    >
      This server will be removed, not deleted. Are you sure you want to remove this server from this project?
    </Modal>
  )
}

export default RemoveServerModal;

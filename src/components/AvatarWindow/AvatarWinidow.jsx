import { Modal } from "../Modal/Modal";
import Dropzone from "./Dropzone";


export const AvatarWindow = ({ showModal, closeModal }) => {

  return (
    <>
      {showModal && (
        <Modal closeModal={closeModal}>
          <Dropzone closeModal={closeModal} />
        </Modal>
      )}
    </>
  );
};

import styles from "./ErrorModal.module.css";
import Button from "./Button";

const ErrorModal = (props) => {
  const onModalCloseHandler = () => {
    props.ModalHandler();
  };
  return (
    <div>
      <div className={styles.backdrop} onClick={onModalCloseHandler}></div>
      <div className={styles.modal}>
        <header className="modal-header">{props.title}</header>
        <p className="modal-message">{props.message}</p>
        <footer>
          <Button onClick={onModalCloseHandler}>Okay!</Button>
        </footer>
      </div>
    </div>
  );
};

export default ErrorModal;

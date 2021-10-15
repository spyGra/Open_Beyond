import ReactDOM from 'react-dom';
import styles from "./updateModal.module.scss";
import {useUserContext} from "../context/userContextProvider";

const UpdateModal = () => {
    const{
        showModal,
        changeModalVisibility,
        changeModalVisibilityAndSendToIndexPage
    } = useUserContext()

    if (showModal !== true){
        return ReactDOM.createPortal(
            <div className={styles.modal}>
                <div className={styles.modalContent}>
                    Are you sure to leave this page:
                    <button onClick={changeModalVisibilityAndSendToIndexPage}>yes</button>
                    <button className={styles.modalxButton} onClick={changeModalVisibility}>No</button>
                </div>
            </div>, document.querySelector("#modal-root")
        )
    } else {
        return null
    }
}

export default UpdateModal;
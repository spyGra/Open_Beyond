import ReactDOM from 'react-dom';
import styles from "./updateModal.module.scss";
import {useUserContext} from "../context/userContextProvider";

const UpdateModal = () => {
    const{
        showModal,
        changeModalVisibility,
        changeModalVisibilityAndSendToHomePage
    } = useUserContext()

    if (showModal !== true){
        return ReactDOM.createPortal(
            <div className="container">
                <div className={styles.modal}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                                <p className="display-6">Are you sure to leave this page?</p>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                    onClick={changeModalVisibilityAndSendToHomePage}
                                >Yes</button>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={changeModalVisibility}
                                >No</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            , document.querySelector("#modal-root")
        )
    } else {
        return null
    }
}

export default UpdateModal;
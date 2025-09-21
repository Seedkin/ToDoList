import styles from './modalBtn.module.css'

function ModalBtn({setter, operation}) {
    return (
        <div className={styles.modalBtns}>
            <button
                className={styles.btn}
                onClick={() => setter(false)}
            >
                CANCEL
            </button>
            <button
                className={styles.btn}
                onClick={operation}
            >
                APPLY
            </button>
        </div>
    )
}

export default ModalBtn

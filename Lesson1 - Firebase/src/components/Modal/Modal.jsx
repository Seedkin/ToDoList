import {useState} from 'react'
import styles from './modal.module.css'
import {useCreateToDo, editToDo} from '../../CRUD'
import ModalBtn from '../ModalBtn/ModalBtn'

export default function Modal({text, editFlag, setEditFlag, id}) {
    const [value, setValue] = useState('')
    const {createFlag, setCreateFlag, createToDos} = useCreateToDo(value)

    function createData(event) {
        event.preventDefault()
        createToDos(value)
        setValue('')
        setCreateFlag(false)
    }

    function editDate(event) {
        event.preventDefault()
        editToDo(id, value)
        setEditFlag(false)
        setValue('')
    }

    return (
        <>
            {createFlag && (
                <>
                    <div
                        className={styles.overlay}
                        onClick={() => setCreateFlag(false)}
                    ></div>
                    <div className={styles.modal}>
                        <h2>NEW NOTE</h2>
                        <form className={styles.modalForm}>
                            <input
                                value={value}
                                type="text"
                                placeholder="Input your note..."
                                onChange={({target}) => setValue(target.value)}
                            />
                            <ModalBtn
                                setter={setCreateFlag}
                                operation={createData}
                            />
                        </form>
                    </div>
                </>
            )}

            {editFlag && (
                <>
                    <div
                        className={styles.overlay}
                        onClick={() => setEditFlag(false)}
                    ></div>
                    <div className={styles.modal}>
                        <h2>EDIT TODO</h2>
                        <form className={styles.modalForm}>
                            <input
                                type="text"
                                placeholder="Input your note..."
                                defaultValue={text}
                                onChange={({target}) => setValue(target.value)}
                            />
                            <ModalBtn
                                setter={setEditFlag}
                                operation={editDate}
                            />
                        </form>
                    </div>
                </>
            )}
            <button
                className={styles.createToDoModalBtn}
                onClick={() => setCreateFlag(true)}
            >
                +
            </button>
        </>
    )
}

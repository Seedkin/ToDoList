import {deleteToDo} from '../../CRUD'
import styles from './listToDos.module.css'

export default function ListToDos({toDos, setEditFlag, setEditToDoText, refreshList}) {
    function handleEdit(id, text) {
        setEditFlag(true)
        setEditToDoText({id, text})
    }

    return toDos.map((toDo) => (
        <li
            className={styles.listItem}
            key={toDo.id}
        >
            {toDo.text}
            <div className={styles.listItemBtns}>
                <button
                    className={styles.buttonIcon}
                    onClick={() => handleEdit(toDo.id, toDo.text)}
                >
                    <img
                        src="/update-icon.svg"
                        alt="update"
                    />
                </button>
                <button
                    className={styles.buttonIcon}
                    onClick={() => deleteToDo(toDo.id, refreshList)}
                >
                    <img
                        src="/delete-icon.svg"
                        alt="delete"
                    />
                </button>
            </div>
        </li>
    ))
}

import {deleteToDo} from '../../CRUD'
import styles from './listToDos.module.css'

export default function ListToDos({toDos, setEditFlag, setEditToDoText}) {
    function handleEdit(id, text) {
        setEditFlag(true)
        setEditToDoText({id, text})
    }

    return toDos.map(({id, text}) => (
        <li
            className={styles.listItem}
            key={id}
        >
            {text}
            <div className={styles.listItemBtns}>
                <button
                    className={styles.buttonIcon}
                    onClick={() => handleEdit(id, text)}
                >
                    <img
                        src="/update-icon.svg"
                        alt="update"
                    />
                </button>
                <button
                    className={styles.buttonIcon}
                    onClick={() => deleteToDo(id)}
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

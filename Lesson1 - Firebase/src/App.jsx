import {useState} from 'react'
import styles from './app.module.css'
import {useGetToDo} from './CRUD'
import {filteredAndSortToDo} from './components/utils'
import Modal from './components/Modal/Modal'
import ListToDos from './components/ListToDos/ListToDos'
import SearchSortSection from './components/SearchSortSection/SearchSortSection'

export const App = () => {
    const {isLoading, toDos} = useGetToDo()
    const [editFlag, setEditFlag] = useState(false)
    const [editToDoText, setEditToDoText] = useState({})
    const [serchValue, setSerchValue] = useState('')
    const [sortFlag, setSortFlag] = useState(false)

    return (
        <div className={styles.app}>
            <h1>TODO LIST</h1>
            <Modal
                text={editToDoText.text}
                editFlag={editFlag}
                setEditFlag={setEditFlag}
                id={editToDoText.id}
            />
            <SearchSortSection
                setSerchValue={setSerchValue}
                sortFlag={sortFlag}
                setSortFlag={setSortFlag}
            />
            {filteredAndSortToDo(toDos, serchValue, sortFlag).length === 0 && !isLoading && (
                <div className={styles.empty}>
                    <img
                        className={styles.emptyImage}
                        src="/empty.png"
                        alt="empty"
                    />
                    <p className={styles.emptyText}>Empty</p>
                </div>
            )}
            <div className={styles.toDoList}>
                <ul className={styles.list}>
                    {isLoading ? (
                        <div className={styles.loader}></div>
                    ) : (
                        <ListToDos
                            toDos={filteredAndSortToDo(toDos, serchValue, sortFlag)}
                            setEditFlag={setEditFlag}
                            setEditToDoText={setEditToDoText}
                        />
                    )}
                </ul>
            </div>
        </div>
    )
}

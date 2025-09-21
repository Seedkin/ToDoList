import {useState} from 'react'
import styles from './app.module.css'
import Modal from './components/Modal/Modal'
import ListToDos from './components/ListToDos/ListToDos'
import SearchSortSection from './components/SearchSortSection/SearchSortSection'
import {useGetToDo} from './CRUD'

export const App = () => {
    const [refreshListFlag, setRefreshListFlag] = useState(false)

    const {isLoading, toDos} = useGetToDo(refreshListFlag)

    const [editFlag, setEditFlag] = useState(false)
    const [editToDoText, setEditToDoText] = useState({})
    const [serchValue, setSerchValue] = useState('')
    const [sortFlag, setSortFlag] = useState(false)

    const refreshList = () => setRefreshListFlag((prev) => !prev)

    function filteredAndSortToDo() {
        const filterToDos = toDos.filter((todo) => todo.text.toLowerCase().includes(serchValue.toLowerCase()))
        if (sortFlag) {
            const sortToDos = [...filterToDos].sort((a, b) => a.text.localeCompare(b.text))
            return sortToDos
        } else {
            return filterToDos
        }
    }

    return (
        <div className={styles.app}>
            <h1>TODO LIST</h1>
            <Modal
                refreshList={refreshList}
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
            {filteredAndSortToDo().length === 0 && (
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
                            toDos={filteredAndSortToDo()}
                            setEditFlag={setEditFlag}
                            setEditToDoText={setEditToDoText}
                            refreshList={refreshList}
                        />
                    )}
                </ul>
            </div>
        </div>
    )
}

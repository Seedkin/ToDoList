import {useEffect, useState} from 'react'
import styles from './app.module.css'

export const App = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [toDos, setToDos] = useState([])

    useEffect(() => {
        setIsLoading(true)
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then((toDoDate) => {
                if (!toDoDate.ok) {
                    throw new Error('Ошибка запроса')
                }
                return toDoDate.json()
            })
            .then((toDoDate) => {
                setToDos(toDoDate)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => setIsLoading(false))
    }, [])
    return (
        <div className={styles.app}>
            <h1>TODO LIST</h1>
            <button className={styles.createToDoModalBtn}>+</button>
            {/* <div className={styles.inputField}>
                <form>
                    <input type="text" />
                    <button type="submit">Поиск</button>
                </form>
            </div> */}
            <div className={styles.toDoList}>
                <ul className={styles.list}>
                    {isLoading ? (
                        <div className={styles.loader}></div>
                    ) : (
                        toDos.map(({id, title}) => (
                            <li
                                className={styles.listItem}
                                key={id}
                            >
                                {title}
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    )
}

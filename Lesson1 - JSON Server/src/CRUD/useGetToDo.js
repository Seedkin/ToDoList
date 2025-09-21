import {useEffect, useState} from 'react'

export function useGetToDo(refreshListFlag) {
    const [isLoading, setIsLoading] = useState(false)
    const [toDos, setToDos] = useState([])

    useEffect(() => {
        setIsLoading(true)
        fetch('http://localhost:3000/ToDoList')
            .then((toDoData) => {
                if (!toDoData.ok) {
                    throw new Error('Ошибка запроса')
                }
                return toDoData.json()
            })
            .then((toDoDate) => {
                setToDos(toDoDate)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => setIsLoading(false))
    }, [refreshListFlag])

    return {isLoading, toDos}
}

import {useEffect, useState} from 'react'
import {ref, onValue} from 'firebase/database'
import {db} from '../firebase'

export function useGetToDo() {
    const [isLoading, setIsLoading] = useState(true)
    const [toDos, setToDos] = useState([])

    useEffect(() => {
        const toDoDbRef = ref(db, 'ToDoList')

        return onValue(toDoDbRef, (snapshot) => {
            const loadedToDoList = snapshot.val() || {}

            setToDos(loadedToDoList)
            setIsLoading(false)
        })
    }, [])

    return {isLoading, toDos}
}

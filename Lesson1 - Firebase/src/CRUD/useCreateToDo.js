import {useState} from 'react'
import {ref, push} from 'firebase/database'
import {db} from '../firebase'

export function useCreateToDo(value) {
    const [createFlag, setCreateFlag] = useState(false)

    function createToDos() {
        const toDoDbRef = ref(db, 'ToDoList')

        push(toDoDbRef, {
            text: value,
        })
    }

    return {createFlag, setCreateFlag, createToDos}
}

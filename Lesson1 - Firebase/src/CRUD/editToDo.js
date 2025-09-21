import {ref, update} from 'firebase/database'
import {db} from '../firebase'

export function editToDo(id, value) {
    const editDbRef = ref(db, `ToDoList/${id}`)

    update(editDbRef, {
        text: value,
    })
}

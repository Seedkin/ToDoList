import {ref, remove} from 'firebase/database'
import {db} from '../firebase'

export function deleteToDo(id) {
    const editDbRef = ref(db, `ToDoList/${id}`)
    remove(editDbRef)
}

import {useState} from 'react'

export function useCreateToDo(refreshList, value) {
    const [createFlag, setCreateFlag] = useState(false)

    function createToDos() {
        fetch('http://localhost:3000/ToDoList', {
            method: 'POST',
            headers: {'Content-type': 'application/json;charset=utf-8'},
            body: JSON.stringify({
                text: value,
            }),
        })
            .then((rawResponse) => rawResponse.json())
            .then(() => {
                // console.log('Ответ сервера', response)
                refreshList()
            })
    }

    return {createFlag, setCreateFlag, createToDos}
}

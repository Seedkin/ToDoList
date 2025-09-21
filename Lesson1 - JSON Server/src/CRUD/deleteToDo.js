export function deleteToDo(id, refreshList) {
    fetch(`http://localhost:3000/ToDoList/${id}`, {
        method: 'DELETE',
    })
        .then((rawResponse) => rawResponse.json())
        .then(() => {
            // console.log('Ответ сервера', response)
            refreshList()
        })
}

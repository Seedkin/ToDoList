export function updateToDo(id, value, refreshList) {
    fetch(`http://localhost:3000/ToDoList/${id}`, {
        method: 'PUT',
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

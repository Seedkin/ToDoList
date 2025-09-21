export function filteredAndSortToDo(toDos, serchValue, sortFlag) {
    const todosArray = Object.entries(toDos).map(([id, todo]) => ({id, ...todo}))
    const filterToDos = todosArray.filter((todo) => todo.text.toLowerCase().includes(serchValue.toLowerCase()))
    if (sortFlag) {
        const sortToDos = [...filterToDos].sort((a, b) => a.text.localeCompare(b.text))
        return sortToDos
    } else {
        return filterToDos
    }
}

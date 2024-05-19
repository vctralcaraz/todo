function addTodo(event) {
    event.preventDefault();

    const todoList = document.getElementById("todo-list");
    const newTodo = document.createElement("li");
    const tooltip = document.createElement("span");
    tooltip.classList.add("tooltiptext");
    tooltip.innerText = "Click the task name to complete it";
    newTodo.innerText = event.target.todo.value;
    newTodo.appendChild(tooltip);
    newTodo.addEventListener("click", () => {
        newTodo.classList.toggle("completed");

        setTimeout(() => {
            newTodo.remove();
        }, 3000);
    });

    todoList.appendChild(newTodo);

    event.target.todo.value = "";
}

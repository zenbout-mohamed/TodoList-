import TodoItem from "./TodoItem";

export default function TodoList({ todos , onDelete, onToggle}){
    return(
        <ul>
            {todos.map((todo) => (
                <TodoItem
                key={todo.id}
                todo={todo}
                onDelete={() => onDelete(todo.id)} 
                onToggle={() => onToggle(todo.id)}               
                />
            ))}           
        </ul>
    );
} 
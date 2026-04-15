import TodoItem from "./TodoItem";

export default function TodoList({ todos , onDelete}){
    return(
        <ul>
            {todos.map((todo , index) => (
                <TodoItem
                key={index}
                text={todo}
                onDelete={() => onDelete(index)}               
                />
            ))}           
        </ul>
    );
} 
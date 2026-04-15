export default function TodoItem({ todo , onDelete, onToggle }){
return (
    <li style ={{ textDecoration: todo.completed ? "line-through" : "none" }}>
        <input
            type="checkbox"
            checked={todo.completed}
            onChange={onToggle}        
        />

        <strong>{todo.title}</strong>-- {todo.author}

        <div>
            {todo.tags?.map((tag, index) => (
            <span key = {index}>#{tag}</span>
            ))}
        </div>


        
        <button onClick={onDelete}>Supprimer</button>
    </li>
    );
}
export default function TodoItem( text , onDelete){
return (
    <li>
        {text}
        <button onClick={onDelete}>Supprimer</button>
    </li>
);
}
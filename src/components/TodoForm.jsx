import { useState } from "react";

export default function TodoForm({ onAdd }){
    const [title , setTitle]= useState("");
    const [author , setAuthor]= useState("");
    const [tags , setTags]= useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("Bonjour");
        console.log('mon titre',title)

        if((title =="") || (author=="") || (tags=="")) return; 
        onAdd({
            title,
            author,
            tags: tags
            ? tags.split(",").map((t) => t.trim())
            : []
        });

        setTitle("");
        setAuthor("");
        setTags("");
    };

    return(
        <form onSubmit={handleSubmit}>
            <input 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Titre :"                 
            />
            <input 
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                type="text"
                placeholder="Auteur :"                 
            />
            <input 
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                type="text"
                placeholder="Tags :"                 
            />
            <button onClick={(e) => handleSubmit(e)}>Ajouter</button>

        </form>
    );

}
import { useState } from "react";

export default function TodoForm({ onAdd }){
    const [title , setTitle]= useState("");
    const [author , setAuthor]= useState("");
    const [tags , setTags]= useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if(title.trim !== "") return;
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
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                type="text"
                placeholder="Titre :"                 
            />
            <input 
                onChange={(e) => setAuthor(e.target.value)}
                value={author}
                type="text"
                placeholder="Auteur :"                 
            />
            <input 
                onChange={(e) => setTags(e.target.value)}
                value={tags}
                type="text"
                placeholder="Tags :"                 
            />
            <button>Ajouter</button>

        </form>
    );

}
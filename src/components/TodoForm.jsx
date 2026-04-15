import { useState } from "react";

export default function TodoForm({ onAdd }){
    const [input , setInput]= useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(input);
        setInput("");
    };

    return(
        <form onSubmit={handleSubmit}>
            <input 
                onChange={(e) => setInput(e.target.value)}
                value={input}
                type="text"
                placeholder="Nouvelle Tache"                 
            />
            <button>Ajouter</button>

        </form>
    );

}
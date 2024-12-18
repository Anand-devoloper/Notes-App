import React, { useState } from "react";
import { useNotes } from "../context/NotesContext";
import { v4 as uuidv4 } from "uuid";

const AddNote: React.FC = () => {
  const { dispatch } = useNotes();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAddNote = () => {
    if (title.trim() && content.trim()) {
      dispatch({
        type: "ADD_NOTE",
        payload: { id: uuidv4(), title, content },
      });
      setTitle("");
      setContent("");
    }
  };

  return (
    <div className="add-note">
      <input
        type="text"
        placeholder="Note Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Note Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleAddNote}>Add Note</button>
    </div>
  );
};

export default AddNote;

import React, { useState } from "react";
import { useNotes } from "../context/NotesContext";

interface NoteItemProps {
  note: {
    id: string;
    title: string;
    content: string;
  };
}

const NoteItem: React.FC<NoteItemProps> = ({ note }) => {
  const { dispatch } = useNotes();
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const handleSave = () => {
    dispatch({ type: "EDIT_NOTE", payload: { ...note, title, content } });
    setIsEditing(false);
  };

  const handleDelete = () => {
    dispatch({ type: "DELETE_NOTE", payload: note.id });
  };

  return (
    <div className="note-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default NoteItem;

import React, { useState } from "react";
import { useNotes } from "../context/NotesContext";
import NoteItem from "./NoteItem";

const NoteList: React.FC = () => {
  const { state } = useNotes();
  const [search, setSearch] = useState("");

  const filteredNotes = state.notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="note-list">
      <input
        type="text"
        placeholder="Search notes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredNotes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NoteList;

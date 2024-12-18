import React from "react";
import { NotesProvider } from "./context/NotesContext";
import AddNote from "./components/AddNote";
import NoteList from "./components/NoteList";
import "./styles/App.css";

const App: React.FC = () => {
  return (
    <NotesProvider>
      <div className="app">
        <h1>Notes App</h1>
        <AddNote />
        <NoteList />
      </div>
    </NotesProvider>
  );
};

export default App;

import React, { createContext, useContext, useReducer } from "react";

interface Note {
  id: string;
  title: string;
  content: string;
}

type NotesState = {
  notes: Note[];
};

type NotesAction =
  | { type: "ADD_NOTE"; payload: Note }
  | { type: "DELETE_NOTE"; payload: string }
  | { type: "EDIT_NOTE"; payload: Note };

const NotesContext = createContext<{
  state: NotesState;
  dispatch: React.Dispatch<NotesAction>;
}>({ state: { notes: [] }, dispatch: () => null });

const notesReducer = (state: NotesState, action: NotesAction): NotesState => {
  switch (action.type) {
    case "ADD_NOTE":
      return { notes: [...state.notes, action.payload] };
    case "DELETE_NOTE":
      return { notes: state.notes.filter((note) => note.id !== action.payload) };
    case "EDIT_NOTE":
      return {
        notes: state.notes.map((note) =>
          note.id === action.payload.id ? action.payload : note
        ),
      };
    default:
      return state;
  }
};

export const NotesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(notesReducer, { notes: [] });

  return (
    <NotesContext.Provider value={{ state, dispatch }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => useContext(NotesContext);

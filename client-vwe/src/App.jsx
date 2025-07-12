import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingContainer from "./pages/Landing/LandingContainer";
import LibraryContainer from "./pages/Library/LibraryContainer";
import EditorContainer from "./pages/Editor/EditorContainer";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingContainer />} />
        <Route path="/library" element={<LibraryContainer />} />
        <Route path="/editor" element={<EditorContainer />} />
      </Routes>
    </div>
  );
}

export default App;

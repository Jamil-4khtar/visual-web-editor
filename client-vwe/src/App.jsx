import React, { Suspense, lazy } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";
const LandingContainer = lazy(() => import("./pages/Landing/LandingContainer"));
const LibraryContainer = lazy(() => import("./pages/Library/LibraryContainer"));
const EditorContainer = lazy(() => import("./pages/Editor/EditorContainer"));

function App() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<LandingContainer />} />
          <Route path="/library" element={<LibraryContainer />} />
          <Route path="/editor" element={<EditorContainer />} />
          <Route path="/editor/:id" element={<EditorContainer />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

import './App.css';
import React, { useState } from 'react';
import { marked } from 'marked';
import useLocalStorage from './useLocalStorage'; // Import the custom hook
import Docs from './Docs'; // Import Docs component

const App = () => {
  const [code, setCode] = useLocalStorage('markdownContent', '## Hello');
  const [compiled, setCompiled] = useState('<h2 id="hello">Hello</h2>');
  const [hidePreview, setHidePreview] = useState(true);
  const [showDocs, setShowDocs] = useState(false); // State for Docs tab

  const openMD = () => {
    setHidePreview(true);
  };

  const openPreview = () => {
    setHidePreview(false);
  };

  const handleChange = (e) => {
    setCode(e.target.value);
    setCompiled(marked.parse(e.target.value));
  };

  const toggleDocs = () => {
    setShowDocs(!showDocs); // Toggle Docs view
  };

  return (
    <>
      <h1>Markdown Previewer React App</h1>
      <div className="container">
        <div className="btns">
          <button onClick={openMD} className="btn">Markdown</button>
          <button onClick={openPreview}>Preview</button>
          <button onClick={toggleDocs}>Docs</button>
        </div>
        {showDocs && <Docs />} {/* Display Docs if showDocs is true */}
        {hidePreview ? (
          <div>
            <textarea onChange={handleChange} value={code} />
          </div>
        ) : (
          <div>
            <div dangerouslySetInnerHTML={{ __html: compiled }} />
          </div>
        )}
      </div>
    </>
  );
};

export default App;

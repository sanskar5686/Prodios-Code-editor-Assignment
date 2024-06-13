import { useEffect, useRef } from "react";
import React from 'react';
import Codemirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/addon/edit/closebrackets.js';
import 'codemirror/addon/edit/closetag.js';
import Prism from 'prismjs';

const Compiler = () => {
    const editorRef = useRef(null);
    const codemirrorInstanceRef = useRef(null);

    useEffect(() => {
        if (editorRef.current && !codemirrorInstanceRef.current) {
            codemirrorInstanceRef.current = Codemirror.fromTextArea(editorRef.current, {
                mode: { name: 'javascript', json: true },
                theme: 'dracula',
                autoCloseTags: true,
                autoCloseBrackets: true,
                lineNumbers: true,
                indentUnit: 2,
                fontSize: 16,
                 // Adjust font size here
            });
        }
    }, []);

    const initialCode = `
import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <h1>Hello world</h1>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
`.trim();
useEffect(() => {
    Prism.highlightAll();
}, []);
    return (
        <>
            <textarea id="realTimeEditor" ref={editorRef} defaultValue={initialCode}></textarea>
        </>
    );
};

export default Compiler;

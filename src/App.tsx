import React, { useState } from 'react';
import './App.css';
import {TextInput} from "./TextInput";

function App() {
    const [text, setText] = useState("Just a single line...");

    return (
        <div className="App">
            <h1>Test Text Area</h1>
            <TextInput onChangeFn={setText} text={text} />
        </div>
    )
}

export default App;

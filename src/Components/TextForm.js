import { useState } from "react"
import React from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter your text');

    const handleOnChangeText = (event) => {
        setText(event.target.value);
    }

    const handleConvertToUppercaseClick = () => {
        let changedText = text.toUpperCase();
        setText(changedText);
        props.showAlert('success', 'Text changed to upper case');
    }

    const handleConvertToLowercaseClick = () => {
        let changedText = text.toLowerCase();
        setText(changedText);
        props.showAlert('warning', 'Text changed to lower case');
    }

    return (
        <>
            <div className='my-3'>
                <h1>Enter text below to analyze</h1>
                <div className="form-group">
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChangeText}></textarea>
                </div>
                <button className="btn btn-primary my-2 mx-2" onClick={handleConvertToUppercaseClick}>Convert to Uppercase</button>
                <button className="btn btn-primary my-2 mx-2" onClick={handleConvertToLowercaseClick}>Convert to Lowercase</button>
            </div>
            <div className="container my-3">
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}

import React, { useState, useRef } from 'react';

export default function TextForm(props) {
  const textareaRef = useRef(null);

  const handleToUppercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleToLowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert('Text copied to clipboard');
      })
      .catch((err) => {
        console.error('Unable to copy text to clipboard', err);
      });
  };
  

  const clearText = () => {
    setText('');
  };

  const removeExtraSpaces = () => {
    setText(removeExtraSpacesHelper(text));
  };

  const removeExtraSpacesHelper = (text) => {
    return text.replace(/\s+/g, ' ').trim();
  };

  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };


  const [text, setText] = useState("");
 

  return (
    <>
    <div className="container" style={{color:props.mode === 'dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
          style={{backgroundColor:props.mode === 'dark'?'grey':'white', color:props.mode === 'dark'?'white':'black'}}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleToUppercase}>
        Convert to uppercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleToLowercase}>
        Convert to LowerCase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>
        Copy to clipboard
      </button>
      <button className="btn btn-primary mx-2" onClick={clearText}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-2" onClick={removeExtraSpaces}>
        Remove extra spaces
      </button>
    </div>
    <div className="container my-3" style={{color:props.mode === 'dark'?'white':'black'}}>
      <h3>Your Text Summary</h3>
      <p>{text.split(" ").filter(()=>{return text.length!==0}).length} words , {text.length} characters</p>
      <p>{0.008 * text.split("").length} minutes to read.</p>
      <h4>Preview</h4>
      <p>{text.length > 0?text:"Enter something in text box to preview."}</p>
    </div>
    </>
  );
}

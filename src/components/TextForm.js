import React, {useState} from 'react';

export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handlelowClick = ()=>{
      // console.log("Uppercase was clicked");
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowercase!", "success");
  }
  const handleClearClick = ()=>{
    // console.log("Uppercase was clicked");
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
}

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    
    const [text , setText] = useState('');

  return (
    <>
    <div className="container my-3" style={{color : props.mode==='light'?'black':'white'}}>
        <h2>{props.heading}</h2>
    <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='light'?'white':'grey' , color: props.mode==='light'?'black':'white' }}  id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to Upercase</button>
    <button className="btn btn-primary mx-2" onClick={handlelowClick} >Convert to lowercase</button>
    <button className="btn btn-primary mx-2" onClick={handleClearClick} >Clear</button>
    </div>

    <div className="container my-3" style={{color : props.mode==='light'?'black':'white'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * (text.split(" ").length) } Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}


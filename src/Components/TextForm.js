import React , {useState} from 'react'


// setText("Use here") ## To change the text variable
export default function TextForm(props){
    const [text, setText] = useState('Enter text here');
    const handleUpClick = () =>{
        console.log("Converted into Uppercase");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = () =>{
        console.log("Converted into LowerCase");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event) => { 
        console.log("Changed");
        setText(event.target.value);
    };
    const handleCopy = ()=>{
        console.log('copy Text')
        let Text = document.getElementById('myBox');
        Text.select();
        navigator.clipboard.writeText(Text.value);
    }
    const handleClear= ()=>{
        console.log('Erasing the text');
        setText('');
    }
    const handleExtraSpaces = ()=>{
        let Text = text.split(/[ ] + /);
        setText(Text.join(" "));
    }
    return (
        <>
            <div>
                <div className="mb-3">
                    <h1 style = {props.mode === 'dark'? {color : 'white'} : {color : 'black'}}>{props.heading}</h1>
                    <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handleOnChange} style = {props.mode === 'dark'? {background : 'grey'} : {background : 'white'}}></textarea>
                </div>
                <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary" onClick={handleLowClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-3" onClick = {handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-3" onClick = {handleClear}>Clear Text</button>
                <button className="btn btn-primary mx-3" onClick = {handleExtraSpaces}>Remove Extra space</button>
                

            </div>
            <div className="container my-3" style = {props.mode === 'dark'? {color : 'white'} : {color : 'black'}}>
                <h1>Your text Summary</h1>
                <p>
                    {text.split(" ").length} words and {text.length} characters
                </p>
                <p>{0.008 * text.split(" ").length} minutes to read</p>
                <h2>Preview</h2>
                <p>{text}</p>

            </div>
            
        </>

    );
}
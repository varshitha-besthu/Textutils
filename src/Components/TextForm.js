import React , {useState} from 'react'


// setText("Use here") ## To change the text variable
export default function TextForm({heading}){
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
    return (
        <>
            <div>
                <div className="mb-3">
                    <h1>{heading}</h1>
                    <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handleOnChange}></textarea>
                </div>
                <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary" onClick={handleLowClick}>Convert to LowerCase</button>

            </div>
            <div className="container" my-3>
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
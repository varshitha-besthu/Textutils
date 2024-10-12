import React , {useState} from 'react'


// setText("Use here") ## To change the text variable
export default function TextForm(props){

    const [text, setText] = useState('Enter text here');
    const handleUpClick = () =>{
        console.log("Converted into Uppercase");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success")
    }
    const handleLowClick = () =>{
        console.log("Converted into LowerCase");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success")

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
        props.showAlert("Copied the text","success")

    }
    const handleClear= ()=>{
        console.log('Erasing the text');
        setText('');
        props.showAlert("Cleared the text","success")

    }
    const handleExtraSpaces = ()=>{
        let Text = text.split(/[ ] + /);
        setText(Text.join(" "));
        props.showAlert("Removed extra spaces","success")

    }
    return (
        <>
            <div>
                <div className="mb-3">
                    <h1 style = {props.mode === 'dark'? {color : 'white'} : {color : 'black'}}>{props.heading}</h1>
                    <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handleOnChange} style = {props.mode === 'dark'? {background : '#65646f',color : 'white'} : {background : 'white',color : 'black'}}>
                        
                    </textarea>
                </div>
                <button className="btn btn-primary  mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary  mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
                <button className="btn btn-primary  mx-1 my-1" onClick = {handleCopy}>Copy Text</button>
                <button className="btn btn-primary  mx-1 my-1" onClick = {handleClear}>Clear Text</button>
                <button className="btn btn-primary  mx-1 my-1" onClick = {handleExtraSpaces}>Remove Extra space</button>
                

            </div>
            <div className="container my-3" style = {props.mode === 'dark'? {color : 'white'} : {color : 'black'}}>
                <h1>Your text Summary</h1>
                <p>
                    {text.split(" ").filter((element)=>{return element.length !== 0}).length} words and {text.length} characters
                </p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter text to preview it here"}</p>

            </div>
            
        </>

    );
}
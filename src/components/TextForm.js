import React,{useState} from 'react'


export default function TextForm(props) {
    
    const handleUpClick = ()=>{
       /// console.log("Uppercase was clicked");
        let newtext = text.toUpperCase();
        setText(newtext)
    }
    const handleLoClick = ()=>{
        /// console.log("Uppercase was clicked");
         let newtext = text.toLowerCase();
         setText(newtext)
     }
     const handleClearClick = ()=>{
        /// console.log("Uppercase was clicked");
         let newtext = "";
         setText(newtext)
     }
    const [text,setText]= useState('');
    const handleOnChange= (event)=>{
        //console.log("on chnage");
        setText(event.target.value);

    }
    
  return (
    <>
    <div className="container" style ={{color: props.mode==='dark'?'white':'black'}}> 
        
       <h1>{props.heading}</h1>
     <div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{background: props.mode==='dark'?'gray':'white' ,color: props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
   <button className="btn btn-primary mx-2" onClick = {handleUpClick}>Convert to upper case</button>
   <button className="btn btn-primary mx-2" onClick = {handleLoClick}>Convert to lower case</button>
   <button className="btn btn-primary mx-2" onClick = {handleClearClick}>clear text</button>
   
        </div>

        <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p> {text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} Minutes to read</p>
           <h2>Preview</h2>
           <p>{text.length>0?text:"Enter something in the text box above to preview it here"}</p>

        </div>
        </>
  )
}

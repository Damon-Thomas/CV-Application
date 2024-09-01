import './LongFormInput.css'

function LongFormInput({setHook, labelText, inputID, rows = "6"}) {
    return (
      <div className="formMultiLineInput">
        <label htmlFor={inputID}>{labelText}</label>
        <textarea className="multiLineInput" type="text" rows={rows} id={inputID} name={inputID} onChange={(event) => setHook(event.target.value)} />
      </div>
    );
  }
  
  export default LongFormInput
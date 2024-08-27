import './LongFormInput.css'

function LongFormInput({labelText, inputID}) {
    return (
      <div className="formMultiLineInput">
        <label htmlFor={inputID}>{labelText}</label>
        <textarea className="multiLineInput" type="text" rows='6' id={inputID} name={inputID} />
      </div>
    );
  }
  
  export default LongFormInput
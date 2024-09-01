import "./FormInput.css"

function FormInput({setHook, labelText, inputID, preValue = ''}) {
 
  return (
    <div className="formBasicInput">
      <label htmlFor={inputID}>{labelText}</label>
      <input className="singleLineInput" type="text" /*id={inputID}*/ name={inputID} defaultValue={preValue} onChange={(event) => setHook(event.target.value)} />
    </div>
  );
}

export default FormInput
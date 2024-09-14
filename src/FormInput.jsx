import "./FormInput.css"

function FormInput({setHook, labelText, inputID, hookValue = ''}) {
  function processedHook() {
    if (hookValue != "$$PREValue$$") {
      return hookValue
    }
    else return ''
  }
  return (
    <div className="formBasicInput">
      <label htmlFor={inputID}>{labelText}</label>
      <input className="singleLineInput" type="text" /*id={inputID}*/ name={inputID} value={processedHook()} onChange={(event) => setHook(event.target.value)} />
    </div>
  );
}

export default FormInput
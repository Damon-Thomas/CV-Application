import "./FormInput.css"

function FormInput({labelText, inputID}) {
  return (
    <div className="formBasicInput">
      <label htmlFor={inputID}>{labelText}</label>
      <input className="singleLineInput" type="text" id={inputID} name={inputID} />
    </div>
  );
}

export default FormInput
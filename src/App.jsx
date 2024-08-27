import "./App.css";
import Dropdown from "./dropdown";
import FormInput from "./FormInput";
import LongFormInput from "./LongFormInput";

const dropContent = (
  <>
    <Dropdown text="wow1" />
    <Dropdown text="wow2" />
    <Dropdown text="wow3" />
  </>
);

const identificationContent = (
  
    <div className="idForm">
      <FormInput labelText="Full Name" inputID="FullName" />
      <FormInput labelText="Email" inputID="Email" />
      <FormInput labelText="Phone Number" inputID="PhoneNumber" />
      <FormInput labelText="Address" inputID="Address" />
      <FormInput labelText="Occupation" inputID="Occupation" />
      <div className="emptyForm"></div>
    </div>
  
)

const summaryContent = (
  <div className="summaryForm">
    <LongFormInput labelText="Brief Summary" inputID="Summary" />
  </div>
)

function App() {
  return (
    <div className="main">
      <div className="userEntry">
        <h1 className="mainHeading">Personal Info</h1>
        <Dropdown text="Identification" content={identificationContent} />
        <Dropdown text="Summary" content={summaryContent} />
        <Dropdown text="Work History" content={dropContent} />
        <Dropdown text="Education" content={dropContent} />
        <Dropdown text="Skills" content={dropContent} />
      </div>
      <div className="userOutput"></div>
    </div>
  );
}

export default App;

import "./App.css";
import Dropdown from "./dropdown";
import FormInput from "./FormInput";
import LongFormInput from "./LongFormInput";
import ExperienceContent from "./ExperienceContent";
import AddButton from "./AddButton";
import { useState } from "react";

const dropContent = (
  <>
    <Dropdown text="wow1" />
    <Dropdown text="wow2" />
    <Dropdown text="wow3" />
  </>
);

function getIdentificationContent(
  fNameHook,
  lNameHook,
  emailHook,
  phoneHook,
  addressHook
) {
  return (
    <div className="idForm">
      <FormInput
        setHook={fNameHook}
        labelText="First Name"
        inputID="FirstName"
      />
      <FormInput setHook={lNameHook} labelText="Last Name" inputID="LastName" />
      <FormInput setHook={emailHook} labelText="Email" inputID="Email" />
      <FormInput
        setHook={phoneHook}
        labelText="Phone Number"
        inputID="PhoneNumber"
      />
      <FormInput setHook={addressHook} labelText="Address" inputID="Address" />
      {/* <FormInput labelText="Occupation" inputID="Occupation" /> */}
      <div className="emptyForm"></div>
    </div>
  );
}

// const identificationContent = (

// )
function summaryContent(summaryHook) {
  return (
    <div className="summaryForm">
      <LongFormInput setHook={summaryHook} labelText="Brief Summary" inputID="Summary" />
    </div>
  )
}
// const summaryContent = (
//   <div className="summaryForm">
//     <LongFormInput labelText="Brief Summary" inputID="Summary" />
//   </div>
// );

const workContent = <AddButton textContent="Add Experience" />;

function App() {
  const [firstName, setFirstName] = useState("Average");
  const [lastName, setLastName] = useState("Programmer");
  const [email, setEmail] = useState("programmerMcEmaillongemail@gmail.com");
  const [phone, setPhone] = useState("905-555-5555");
  const [address, setAddress] = useState("1952 McFake Drive, Toronto, ON, Canada");
  const [summary, setSummary] = useState("I am a programmer just trying to find my way around this electric rock. I've learned so much. I'm still learning. This is just another step in my journey of knowledge. With great knowledge comes great power. With great power comes great responsibility. With great responsibility comes great failure.")

  // function sum(...theArgs) {
  //   let total = 0;
  //   for (const arg of theArgs) {
  //     total += arg;
  //   }
  //   return total;
  // }
// populate headings only if there is some content entered
function createHeading(headingText, ...blankCheck) {
 
  const hasValue = (obj, value) => Object.values(obj).includes(value);
  
  for (const arg of blankCheck) {
    if(!(hasValue(arg, ''))) {
      return headingText
    }
  }
  return ''
}


  return (
    <div className="main">

{/* Left Side - User Entry Dropdowns */}
      <div className="userEntry noPrint">
        <h1 className="mainHeading">Personal Info</h1>
        <Dropdown
          text="Identification"
          content={getIdentificationContent(
            setFirstName,
            setLastName,
            setEmail,
            setPhone,
            setAddress
          )}
        />
        <Dropdown text="Summary" content={summaryContent(setSummary)} />
        <Dropdown text="Work Experience" content={workContent} />
        <Dropdown text="Education" content={dropContent} />
        <Dropdown text="Skills" content={dropContent} />
      </div>

{/* Right Side - Autopopulated CV */}
      <div className="userOutput print">
        <div className="col1">
          <div className="cvName">
            <h1 className="firstName cvNameFont">{firstName}</h1>
            <h1 className="lastName cvNameFont">{lastName}</h1>
          </div>
          <div className="cvSummary">
            <h2 className="cvHeading">{createHeading("Summary", {summary})}</h2>
            <p className="cvSummaryBody">{summary}</p>
          </div>
          <div className="cvWorkHistory"></div>
        </div>

        <div className="col2">
          <div className="cvContactInfo">
            <h2 className="cvHeading">{createHeading("Contact Info", {address}, {phone}, {email})}</h2>
            <div className="cvContactContent">
              <p className="cvAddress">{address}</p>
              <p className="cvPhone">{phone}</p>
              <p className="cvEmail">{email}</p>
            </div>
          </div>
          <div className="cvEducation"></div>
          <div className="cvSkills"></div>
        </div>
      </div>
    </div>
  );
}

export default App;

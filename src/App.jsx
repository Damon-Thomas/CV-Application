import "./App.css";
import Dropdown from "./dropdown";
import FormInput from "./FormInput";
import LongFormInput from "./LongFormInput";
import ExperienceContentForm from "./ExperienceContent";
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


function summaryContent(summaryHook) {
  return (
    <div className="summaryForm">
      <LongFormInput
        setHook={summaryHook}
        labelText="Brief Summary"
        inputID="Summary"
      />
    </div>
  );
}
//
//
// un nest add button. no components withing components
function workContent(allJobs, setjobList, nextId, setnewNextId, addExperienceShrink, setAddExperienceShrink) {
  // function handleAddClick() {
  //   setAddExperienceShrink(!addExperienceShrink)
  // }
  console.log('first', allJobs)
  return (
    <div className="experienceInputContainer">
      <div className="experienceDrop">
            {/* <div className="addExperienceButton"> */}
                <AddButton textContent="Add Experience" shrink={addExperienceShrink} setShrink={setAddExperienceShrink} />
                <div className={addExperienceShrink ? 'experienceForm' : 'shrunk experienceForm'}>
                <ExperienceContentForm allJobs={allJobs} setjobList={setjobList} nextId={nextId} setnewNextId={setnewNextId}/>
                </div>
            {/* </div> */}
      </div>
    </div>)
  
}


function App() {
  const [firstName, setFirstName] = useState("Average");
  const [lastName, setLastName] = useState("Programmer");
  const [email, setEmail] = useState("programmerMcEmaillongemail@gmail.com");
  const [phone, setPhone] = useState("905-555-5555");
  const [address, setAddress] = useState(
    "1952 McFake Drive, Toronto, ON, Canada"
  );
  const [summary, setSummary] = useState(
    "I am a programmer just trying to find my way around this electric rock. I've learned so much. I'm still learning. This is just another step in my journey of knowledge. With great knowledge comes great power. With great power comes great responsibility. With great responsibility comes great failure."
  );
  
  const [addExperienceShrink, setAddExperienceShrink] = useState(false)
  // const [experienceShrink, setExperienceShrink] = useState(true)
  const [nextId, setnewNextId] = useState(0)
  const [allJobs, setjobList] = useState(
    [
      {
              id: '0a',
              jobTitle: "Junior Developer",
              company: "Fake Company inc.",
              location: "Toronto, ON, Canada",
              date: "Jan 2023 - Present",
      }
  ])

  
  
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
      if (!hasValue(arg, "")) {
        return headingText;
      }
    }
    return "";
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
        <Dropdown text="Work Experience" content={workContent(allJobs, setjobList, nextId, setnewNextId, addExperienceShrink, setAddExperienceShrink)} />
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
            <h2 className="cvHeading">
              {createHeading("Summary", { summary })}
            </h2>
            <p className="cvSummaryBody">{summary}</p>
          </div>
          <div className="cvWorkHistory"></div>
        </div>

        <div className="col2">
          <div className="cvContactInfo">
            <h2 className="cvHeading">
              {createHeading("Contact Info", { address }, { phone }, { email })}
            </h2>
            <div className="cvContactContent">
              <div className="cvAddressContainer">
                <div className="svgContainer">
                  <svg
                    className="contactIcon"
                    xmlns="http://www.w3.org/2000/svg"
                    // height="24px"
                    viewBox="0 -960 960 960"
                    // width="24px"
                    fill="#5f6368"
                  >
                    <path d="M160-120v-480l320-240 320 240v480H560v-280H400v280H160Z" />
                  </svg>
                </div>
                <p className="cvAddress">{address}</p>
              </div>
              <div className="cvPhoneContainer">
                <div className="svgContainer">
                  <svg
                    className="contactIcon"
                    xmlns="http://www.w3.org/2000/svg"
                    // height="24px"
                    viewBox="0 -960 960 960"
                    // width="24px"
                    fill="#5f6368"
                  >
                    <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12Z" />
                  </svg>
                </div>
                <p className="cvPhone">{phone}</p>
              </div>
              <div className="cvEmailContainer">
                <div className="svgContainer">
                  <svg
                    className="contactIcon"
                    xmlns="http://www.w3.org/2000/svg"
                    // height="24px"
                    viewBox="0 -960 960 960"
                    // width="24px"
                    fill="#5f6368"
                  >
                    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280 320-200v-80L480-520 160-720v80l320 200Z" />
                  </svg>
                </div>
                <p className="cvEmail">{email}</p>
              </div>
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

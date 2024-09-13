import { useState } from "react";
import FormInput from "./FormInput";
import AddButton from "./AddButton";
import Dropdown from "./dropdown";
import "./ExperienceContent.css"

// function ExperienceContent() {
//   const [experience, setExperience] = useState([
//     {
//       jobTitle: "Junior Developer",
//       company: "Fake Company inc.",
//       location: "Toronto, ON, Canada",
//       date: "Jan 2023 - Present",
//     },
//   ]);

  

  

//   // const experienceItems = experience.map((job) =>
//   //   <Dropdown key={job.jobTitle + job.company} text={job.jobTitle + " at " + job.company} content={experienceContentForm(job.jobTitle, job.company, job.location, job.date)} />
//   // );

//   return (
    
//       <div className="experienceContentContainer">
//           <AddButton textContent="Add Experience" />
//           {experienceItems}
//       </div>
    
//   );
// }


function ExperienceContentForm(hidden, jobs, setjobList, nextId, setnewNextId, setShrink, submitButton = true, ) {
  const [title, setTitle] = useState('')
  const [company, setCompany] = useState('')
  const [location, setLocation] = useState('')
  const [date, setDate] = useState('')
  

  function saveHandler(e) {
    e.preventDefault()
    setjobList(...jobs,
      {
        id: nextId,
        jobTitle: title,
        jobCompany: company,
        jobLocation: location,
        jobDate: date
      }
    );
    setnewNextId(nextId++)

  }
  const buttonOnCondition = () => {
    if (submitButton === true) {
      return (<button onClick={(e) => {saveHandler(e)}}>Save</button>)
    }
  }
  return (
    <div className={hidden ? "experienceForm hidden": "experienceForm"} >
      <FormInput labelText="Job Title" inputID="jobTitle" preValue={title} onChange={(event) => setTitle(event.target.value)} />
      <FormInput labelText="Company" inputID="company" preValue={company} onChange={(event) => setCompany(event.target.value)}/>
      <FormInput labelText="Location" inputID="location" preValue={location} onChange={(event) => setLocation(event.target.value)}/>
      <FormInput labelText="Date" inputID="date" preValue={date} onChange={(event) => setDate(event.target.value)} />
      {buttonOnCondition()}
    </div>
  );
}

export default ExperienceContentForm;

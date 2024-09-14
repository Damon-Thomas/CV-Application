import { useState } from "react";
import FormInput from "./FormInput";
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


function ExperienceContentForm({allJobs, setjobList, nextId, setnewNextId, submitButton = true,}) {
  const [title, setTitle] = useState('')
  const [company, setCompany] = useState('')
  const [location, setLocation] = useState('')
  const [date, setDate] = useState('')

  function saveHandler(e) {
    e.preventDefault()
  

    setjobList(
      [
        ...allJobs,
      {
        id: nextId,
        jobTitle: title,
        jobCompany: company,
        jobLocation: location,
        jobDate: date
      }
    ]
    );
    setnewNextId(nextId + 1)
    console.log('id count', allJobs.nextId, 'job list', allJobs)

  }
  function buttonOnCondition() {
    if (submitButton === true) {
      return (<button formTarget="addJobForm" className="submitJob" onClick={(e) => {
        saveHandler(e);
        resetForm()
       
      }}>
        Save
        </button>)
    }
  }

  function resetForm() {
    setTitle('')
    setCompany('')
    setLocation('')
    setDate('')

  }

 // reset form on submit. have to reset each form value inividually
 //add dropdowns of position

  return (
    // <div className={hidden ? "experienceForm hidden": "experienceForm"} >
     <> 
      <form action="" className="addJobForm" id="addJobForm">
        <FormInput setHook={setTitle} labelText="Job Title" inputID="jobTitle"  hookValue={title}  />
        <FormInput setHook={setCompany} labelText="Company" inputID="company"  hookValue={company} />
        <FormInput setHook={setLocation} labelText="Location" inputID="location"  hookValue={location} />
        <FormInput setHook={setDate} labelText="Date" inputID="date" hookValue={date}/>
      </form>
      {buttonOnCondition()}
    </>
    //  </div>
  );
}

export default ExperienceContentForm

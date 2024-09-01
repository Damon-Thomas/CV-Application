import { useState } from "react";
import FormInput from "./FormInput";
import AddButton from "./AddButton";
import Dropdown from "./dropdown";

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


function ExperienceContentForm(hidden) {

  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  
  return (
    <div className={hidden ? "experienceForm hidden": "experienceForm"} >
      <FormInput labelText="Job Title" inputID="jobTitle" preValue={title} onChange={(event) => setTitle(event.target.value)} />
      <FormInput labelText="Company" inputID="company" preValue={company} onChange={(event) => setCompany(event.target.value)}/>
      <FormInput labelText="Location" inputID="location" preValue={location} onChange={(event) => setLocation(event.target.value)}/>
      <FormInput labelText="Date" inputID="date" preValue={date} onChange={(event) => setDate(event.target.value)} />
      <button>Submit</button>
    </div>
  );
}

export default ExperienceContentForm;

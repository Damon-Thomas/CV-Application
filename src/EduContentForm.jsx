import { useState } from "react";
import FormInput from "./FormInput";
import "./ExperienceContent.css"


function EduContentForm({allEdu, setEduList, nextEduId, setnewNextEduId, setShrink, shrink}) {
  const [study, setStudy] = useState('')
  const [school, setSchool] = useState('')
  const [location, setLocation] = useState('')
  const [date, setDate] = useState('')

  function shrinkForm() {

    setShrink(["AO", ""])
  }

  function saveHandler(e) {
    e.preventDefault()
    setEduList(
      [
        ...allEdu,
      {
        idEdu: nextEduId,
        study: study,
        school: school,
        schoolDate: date,
        schoolLocation: location
      }
    ]
    );
    setnewNextEduId(nextEduId + 1)
    shrinkForm()
    

  }
//   function buttonOnCondition() {
//     if (submitButton === true) {
//       return (<button formTarget="addJobForm" className="submitJob" onClick={(e) => {
//         saveHandler(e);
//         resetForm()
       
//       }}>
//         Save
//         </button>)
//     }
//   }

 
  

  function resetForm() {
    
    setStudy('')
    setSchool('')
    setLocation('')
    setDate('')

  }

 // reset form on submit. have to reset each form value inividually
 //add dropdowns of position

  return (
    // <div className={hidden ? "experienceForm hidden": "experienceForm"} >
     <> 
      <form action="" className="addJobForm" id="addJobForm">
        <FormInput setHook={setStudy} labelText="Degree / Studies" inputID="study"  hookValue={study}  />
        <FormInput setHook={setSchool} labelText="Scool" inputID="school"  hookValue={school} />
        <FormInput setHook={setLocation} labelText="Location" inputID="edulocation"  hookValue={location} />
        <FormInput setHook={setDate} labelText="Date" inputID="edudate" hookValue={date}/>
      </form>
      <div className="buttonContainer">
        <button formTarget="addEduForm" className="submitEdu" onClick={(e) => {
          saveHandler(e);
          resetForm()
        }}>
          Save
        </button>
        <button formTarget="addEduForm" className="cancelEdu" onClick={(e) => {
          e.preventDefault()
          shrinkForm()
          resetForm()
        }}>
          Cancel
        </button>
      </div>
    </>
    //  </div>
  );
}

export default EduContentForm

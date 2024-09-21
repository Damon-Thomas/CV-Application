import { useState } from "react";
import FormInput from "./FormInput";
import "./skillsContent.css"


function SkillsContentForm({allskills, setskillsList, nextskillsId, setnewNextskillsId, setShrink, shrink}) {
  
  const [skill, setSkill] = useState('')

  function shrinkForm() {

    setShrink(["AO", ""])
  }

  function saveHandler(e) {
    e.preventDefault()
    setskillsList(
      [
        ...allskills,
      {
        idskills: nextskillsId,
        skill: skill
      }
    ]
    );
    setnewNextskillsId(nextskillsId + 1)
    shrinkForm()
    

  }

  function resetForm() {
    
    setSkill('')
    
  }

 // reset form on submit. have to reset each form value inividually
 //add dropdowns of position

  return (
    // <div className={hidden ? "experienceForm hidden": "experienceForm"} >
     <> 
      <form action="" className="addSkillForm" id="addSkillForm">
        <FormInput setHook={setSkill} labelText="Skill" inputID="skillForm"  hookValue={skill}  />
        
      </form>
      <div className="buttonContainer">
        <button formTarget="addSkillForm" className="submitSkill" onClick={(e) => {
          saveHandler(e);
          resetForm()
        }}>
          Save
        </button>
        <button formTarget="addSkillForm" className="cancelSkill" onClick={(e) => {
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

export default SkillsContentForm

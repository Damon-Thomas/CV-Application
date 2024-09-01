import ExperienceContentForm from "./ExperienceContent"
import { useState } from "react"
import "./AddButton.css"


function AddButton({textContent}) {

    const [jobs, setJobs] = useState([])
    const [shrink, setShrink] = useState(true)
    
    function handleAddClick() {
        setShrink(!shrink)
    }
    
    return (

        <div className="experienceDrop">
            <div className="addExperienceButton">
                <button className="createNewDropD" onClick={handleAddClick}>{textContent}</button>
                <div className={shrink ? 'shrunk experienceForm' : 'experienceForm'}><ExperienceContentForm hidden={shrink}/></div>
            </div>


        </div>
        
    )
    
    // need to get job from add button but cant as its currently behind a component
    // dropdown > addbutton > adddropdown > dynamic job dropdowns > dynamic dropdown contents
    // usestates at addbutton and dynamic dropdown? problem - job info cant get to addbutton 
    // how to get values to resume?
    // stop and figure out plan first
}

export default AddButton
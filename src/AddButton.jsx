
import "./AddButton.css"
import Icon from "@mdi/react"
import { mdiChevronDown } from '@mdi/js';


function AddButton({textContent, shrink, setShrink}) {

    
    function handleAddClick() {
        if (shrink[1] != 'add') {
            setShrink(["AO", 'add'])
        }
        else {
            setShrink(["AO", ''])
        }
    }

    function shrinkHandler() {
        if (shrink[1] === 'add') {
            return true
        }
        else {
            return false
        }
    }
    
    return (

        // <div className="experienceDrop">
            // <div className="addExperienceButton">
                <button className="createNewDropD" onClick={handleAddClick}>
                    <Icon path={mdiChevronDown} className={shrinkHandler() ? 'activeSC subChevron' : 'inactiveSC subChevron'} />
                    {textContent}
                </button>
                // <div className={shrink ? 'experienceForm' : 'shrunk experienceForm'}><ExperienceContentForm hidden={shrink} jobs={allJobs} setjobList={setjobList} nextId={nextId} setnewNextId={setnewNextId}/></div>
        //     </div>


        // </div>
        
    )
    
    // need to get job from add button but cant as its currently behind a component
    // dropdown > addbutton > adddropdown > dynamic job dropdowns > dynamic dropdown contents
    // usestates at addbutton and dynamic dropdown? problem - job info cant get to addbutton 
    // how to get values to resume?
    // stop and figure out plan first
}

export default AddButton
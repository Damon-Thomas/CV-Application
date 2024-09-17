import { useState } from "react";
import './dropdown.css'
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';


// drop down specifically for the differences in the editing job DD
function Dropdown({text, content = ''}) {
    const [shrink, setShrink] = useState(true)
    
    
    return (
        <div className="dropDown">
            <button className='dropdownButton' onClick={handleDropClick}>
                <Icon path={mdiChevronDown} className={shrink ? 'inactiveDD chevron' : 'activeDD chevron'} />
                <h2>{text}</h2>
                <div className="dropEmpty"></div>
            </button>
            <div className={shrink ? 'shrunk content' : 'content'}   >
                {content}
            </div>
        </div>
    )

    function handleDropClick() {
        setShrink(!shrink)
    }
}



export default Dropdown
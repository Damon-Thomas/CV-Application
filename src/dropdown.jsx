import { useState } from "react";
import './dropdown.css'
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';



function Dropdown({text, content = '', topShrink = '', topSetShrink = '', id = ''}) {
    const [shrink, setShrink] = useState(true)
    // function shrinkOrNah() {
    //     if(topShrink === '') {
    //         return shrink
    //     }
    //     else {
    //         return topShrink
    //     }
    // }

    function shrinkHandler() {
        if(topShrink === '') {
            return shrink
        }
        else if (topShrink[0] === "AC") {
            return true
        }
        else if(id != '') {
            if(topShrink[1] === id) {
                return false
            }
            else return true
        }
    }

    
    
    return (
        <div className="dropDown">
            <button className='dropdownButton' onClick={handleDropClick}>
                <Icon path={mdiChevronDown} className={shrinkHandler() ? 'inactiveDD chevron' : 'activeDD chevron'} />
                <h2>{text}</h2>
                
            </button>
            <div className={shrinkHandler() ? 'shrunk content' : 'content'}   >
                {content}
            </div>
        </div>
    )

    function handleDropClick() {
        if(topShrink === '') {
            setShrink(!shrink)
        }
        
        else if(id != '') {
            if(topShrink[1] === id) {
                topSetShrink(["AO", ''])
            }
            else {
                topSetShrink(["AO", id])
            }
        }

        else {
            if (topShrink[0] === "AC") {
                topSetShrink(["AO", ''])
            }
            else {
                topSetShrink(["AC", ''])
            }
        
    }
}
}



export default Dropdown
import "./App.css";
import Dropdown from "./dropdown";
import FormInput from "./FormInput";
import LongFormInput from "./LongFormInput";
import ExperienceContentForm from "./ExperienceContent";
import AddButton from "./AddButton";
import { useState, useLayoutEffect } from "react";
import EduContentForm from "./EduContentForm";
import SkillsContentForm from "./SkillsContent";

// Edit css for education section on CV. Further test section for bugs
//Contine to skills section

function getIdentificationContent(
  fNameHook,
  fName,
  lNameHook,
  lName,
  emailHook,
  email,
  phoneHook,
  phone,
  addressHook,
  address
) {
  return (
    <div className="idForm">
      <FormInput
        setHook={fNameHook}
        labelText="First Name"
        inputID="FirstName"
        hookValue={fName}
        // preValue={fName}
      />
      <FormInput
        setHook={lNameHook}
        labelText="Last Name"
        inputID="LastName"
        hookValue={lName}
      />
      <FormInput
        setHook={emailHook}
        labelText="Email"
        inputID="Email"
        hookValue={email}
      />
      <FormInput
        setHook={phoneHook}
        labelText="Phone Number"
        inputID="PhoneNumber"
        hookValue={phone}
      />
      <FormInput
        setHook={addressHook}
        labelText="Address"
        inputID="Address"
        hookValue={address}
      />
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

// take out default state and apply them to html conditionally
function App() {
  const [firstName, setFirstName] = useState("$$PREValue$$");

  const [lastName, setLastName] = useState("$$PREValue$$");
  const [email, setEmail] = useState("$$PREValue$$");
  const [phone, setPhone] = useState("$$PREValue$$");
  const [address, setAddress] = useState("$$PREValue$$");
  const [summary, setSummary] = useState("$$PREValue$$");

  const [addExperienceShrink, setAddExperienceShrink] = useState(["AC", ""]);
  // const [experienceShrink, setExperienceShrink] = useState(true)
  const [nextId, setnewNextId] = useState(1);
  const [allJobs, setjobList] = useState([
    
    {
      id: "0a",
      jobTitle: "Junior Developer",
      jobCompany: "Fake Company inc.",
      jobLocation: "Toronto, ON, Canada",
      jobDate: "Jan 2023 - Present",
    },
    {
      id: "0b",
      jobTitle: "CEO of Computer Things",
      jobCompany: "The Company of Computers and Things",
      jobLocation: "Paris, France",
      jobDate: "1967 - 2023",
    },
    {
      id: "0c",
      jobTitle: "Burger Flipper",
      jobCompany: "McBurgers and McComputers",
      jobLocation: "San Jose, CA, USA",
      jobDate: "1923 - 1965",
    },])
    
    const [nextEduId, setnewNextEduId] = useState(1);
    const [allEdu, setEduList] = useState([
      {
        idEdu: "0a",
        study: "Ph.D. - Micro Computer Engineering",
        school: "A Fake University",
        schoolDate: "1923 - 1933",
        schoolLocation: "Berlin, Germany",
      },
      {
        idEdu: "0b",
        study: "Master in Pre-Flight Flying",
        school: "Birdman College",
        schoolDate: "1905 - 1920",
        schoolLocation: "Rio de Janeiro, Brazil",
      },
    ]);
  //   }
  //   return total;
  // }
  // populate headings only if there is some content entered
  function shrinkHandler(state) {
    if (state[1] === "add") {
      return true;
    } else {
      return false;
    }
  }

  function workContent(
    allJobs,
    setjobList,
    nextId,
    setnewNextId,
    addExperienceShrink,
    setAddExperienceShrink
  ) {
    return (
      <div className="experienceInputContainer">
        <div className="experienceDrop">
          <AddButton
            textContent="Add Experience"
            shrink={addExperienceShrink}
            setShrink={setAddExperienceShrink}
          />
          <div
            className={
              shrinkHandler(addExperienceShrink)
                ? "experienceForm"
                : "shrunk experienceForm"
            }
          >
            <ExperienceContentForm
              allJobs={allJobs}
              setjobList={setjobList}
              nextId={nextId}
              setnewNextId={setnewNextId}
              shrink={addExperienceShrink}
              setShrink={setAddExperienceShrink}
            />
          </div>
        </div>
        <div className="experienceEditsDDs">{createExperienceDD()}</div>
      </div>
    );
  }

  function createHeading(headingText, ...blankCheck) {
    const hasValue = (obj, value) => Object.values(obj).includes(value);

    for (const arg of blankCheck) {
      if (!hasValue(arg, "")) {
        return headingText;
      }
    }
    return "";
  }

  function addIcon(icon, inputCheck) {
    if (inputCheck != "") {
      return icon;
    }
  }

  function defaultCreator(hookVariable, defaultText) {
    if (hookVariable === "$$PREValue$$") {
      return defaultText;
    } else {
      return hookVariable;
    }
  }

  function getPhoneIcon() {
    return (
      <svg
        className="contactIcon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#5f6368"
      >
        <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12Z" />
      </svg>
    );
  }

  function getHomeIcon() {
    return (
      <svg
        className="contactIcon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#5f6368"
      >
        <path d="M160-120v-480l320-240 320 240v480H560v-280H400v280H160Z" />
      </svg>
    );
  }

  function getEmailIcon() {
    return (
      <svg
        className="contactIcon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#5f6368"
      >
        <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280 320-200v-80L480-520 160-720v80l320 200Z" />
      </svg>
    );
  }

  

  


  function jobDropDownHTML(job, company, id) {
    return (
      <div className="jobDDContainer">
        <div className="jobDD">
          <h3 className="jobDDTitle">{job}</h3>
          <h5 className="jobDDCompany">{company}</h5>
        </div>
      </div>
    );
  }

  
  
  

  function findIDIndex(id, idName, list) {
    if (id != "") {
      let k = idName;
      let val = id;
      let objIndex = list.findIndex((item) => item[k] === val);
      return objIndex;
    }
  }

  function editJob(selectedID, editTitle, editCompany, editLocation, editDate) {
    let jobIndex = findIDIndex(selectedID, 'id', allJobs);
    let newJobs = [...allJobs];
    newJobs[jobIndex] = {
      id: selectedID,
      jobTitle: editTitle,
      jobCompany: editCompany,
      jobLocation: editLocation,
      jobDate: editDate,
    };

    setjobList(newJobs);
  }

  function experienceDropdownEditForm(
    inputID,
    editTitle,
    editCompany,
    editLocation,
    editDate
  ) {
    return (
      <div className="expDDFs">
        <div className="formBasicInput">
          <label htmlFor={inputID + "edit"}>{"Job Title"}</label>
          <input
            className="singleLineInput"
            type="text"
            /*id={inputID}*/ name={inputID + "edit"}
            value={editTitle}
            onChange={(event) =>
              editJob(
                inputID,
                event.target.value,
                editCompany,
                editLocation,
                editDate
              )
            }
          />
        </div>
        <div className="formBasicInput">
          <label htmlFor={inputID + "edit"}>{"Company"}</label>
          <input
            className="singleLineInput"
            type="text"
            /*id={inputID}*/ name={inputID + "edit"}
            value={editCompany}
            onChange={(event) =>
              editJob(
                inputID,
                editTitle,
                event.target.value,
                editLocation,
                editDate
              )
            }
          />
        </div>
        <div className="formBasicInput">
          <label htmlFor={inputID + "edit"}>{"Location"}</label>
          <input
            className="singleLineInput"
            type="text"
            /*id={inputID}*/ name={inputID + "edit"}
            value={editLocation}
            onChange={(event) =>
              editJob(
                inputID,
                editTitle,
                editCompany,
                event.target.value,
                editDate
              )
            }
          />
        </div>
        <div className="formBasicInput">
          <label htmlFor={inputID + "edit"}>{"Date"}</label>
          <input
            className="singleLineInput"
            type="text"
            /*id={inputID}*/ name={inputID + "edit"}
            value={editDate}
            onChange={(event) =>
              editJob(
                inputID,
                editTitle,
                editCompany,
                editLocation,
                event.target.value
              )
            }
          />
        </div>
      </div>
    );
  }

  function createExperienceDD() {
    return (
      <ul>
        {allJobs.map((job) => (
          <li key={job.id}>
            <Dropdown
              text={jobDropDownHTML(job.jobTitle, job.jobCompany, job.id)}
              content={experienceDropdownEditForm(
                job.id,
                job.jobTitle,
                job.jobCompany,
                job.jobLocation,
                job.jobDate
              )}
              topShrink={addExperienceShrink}
              topSetShrink={setAddExperienceShrink}
              id={job.id}
            />
          </li>
        ))}
      </ul>
    );
  }

  function createExperienceCVContent() {
    return (
      <ul className="cvJobBodyContainer">
        {allJobs.map((job) => (
          <li key={"cv" + job.id} className="cvJobLi">
            {/* {console.log(job)} */}
            <h3 className="cvJobTitle">{job.jobTitle}</h3>
            <h4 className="cvCompanyName">{job.jobCompany}</h4>
            <div className="cvBottomLine">
              <p className="cvLocation">{job.jobLocation}</p>
              <p className="cvDate">{job.jobDate}</p>
            </div>
          </li>
        ))}
      </ul>
    );
  }

  // Altering experience content into education content as they are similar in structure
  const [eduShrink, setEduShrink] = useState(["AC", ""]);

  function educationContent(
    allEdu,
    setEduList,
    nextEduId,
    setnewNextEduId,
    eduShrink,
    setEduShrink
  ) {
    return (
      <div className="experienceInputContainer">
        <div className="experienceDrop">
          <AddButton
            textContent="Add Experience"
            shrink={eduShrink}
            setShrink={setEduShrink}
          />
          <div
            className={
              shrinkHandler(eduShrink)
                ? "experienceForm"
                : "shrunk experienceForm"
            }
          >
            <EduContentForm
              allEdu={allEdu}
              setEduList={setEduList}
              nextEduId={nextEduId}
              setnewNextEduId={setnewNextEduId}
              shrink={eduShrink}
              setShrink={setEduShrink}
            />
          </div>
        </div>
        <div className="experienceEditsDDs">{createEduDD()}</div>
      </div>
    );
  }

  function eduDropDownHTML(edu, company) {
    return (
      <div className="eduDDContainer">
        <div className="eduDD">
          <h3 className="eduDDTitle">{edu}</h3>
          <h5 className="eduDDCompany">{company}</h5>
        </div>
        <div className="eduDDIcons">{/* add hide and delete icons */}</div>
      </div>
    );
  }

  function editEdu(selectedID, editStudy, editSchool, editLocation, editDate) {
    console.log(
      "variables",
      selectedID,
      editStudy,
      editSchool,
      editLocation,
      editDate
    );
    let eduIndex = findIDIndex(selectedID, 'idEdu', allEdu);
    console.log("edu index", eduIndex);
    let newEdus = [...allEdu];
    newEdus[eduIndex] = {
      idEdu: selectedID,
      study: editStudy,
      school: editSchool,
      schoolLocation: editLocation,
      schoolDate: editDate,
    };
    console.log("newEdus", newEdus);
    setEduList(newEdus);
  }

  function eduDropdownEditForm(
    inputID,
    editStudy,
    editSchool,
    editLocation,
    editDate
  ) {
    return (
      <div className="expDDFs">
        <div className="formBasicInput">
          <label htmlFor={inputID + "edit"}>{"Degree/Studies"}</label>
          <input
            className="singleLineInput"
            type="text"
            /*id={inputID}*/ name={inputID + "edit"}
            value={editStudy}
            onChange={(event) =>
              editEdu(
                inputID,
                event.target.value,
                editSchool,
                editLocation,
                editDate
              )
            }
          />
        </div>
        <div className="formBasicInput">
          <label htmlFor={inputID + "edit"}>{"School"}</label>
          <input
            className="singleLineInput"
            type="text"
            /*id={inputID}*/ name={inputID + "edit"}
            value={editSchool}
            onChange={(event) =>
              editEdu(
                inputID,
                editStudy,
                event.target.value,
                editLocation,
                editDate
              )
            }
          />
        </div>
        <div className="formBasicInput">
          <label htmlFor={inputID + "edit"}>{"Location"}</label>
          <input
            className="singleLineInput"
            type="text"
            /*id={inputID}*/ name={inputID + "edit"}
            value={editLocation}
            onChange={(event) =>
              editEdu(
                inputID,
                editStudy,
                editSchool,
                event.target.value,
                editDate
              )
            }
          />
        </div>
        <div className="formBasicInput">
          <label htmlFor={inputID + "edit"}>{"Date"}</label>
          <input
            className="singleLineInput"
            type="text"
            /*id={inputID}*/ name={inputID + "edit"}
            value={editDate}
            onChange={(event) =>
              editEdu(
                inputID,
                editStudy,
                editSchool,
                editLocation,
                event.target.value
              )
            }
          />
        </div>
      </div>
    );
  }

  function createEduDD() {
    return (
      <ul>
        {allEdu.map((edu) => (
          <li key={edu.idEdu}>
            <Dropdown
              text={eduDropDownHTML(edu.study, edu.school)}
              content={eduDropdownEditForm(
                edu.idEdu,
                edu.study,
                edu.school,
                edu.schoolLocation,
                edu.schoolDate
              )}
              topShrink={eduShrink}
              topSetShrink={setEduShrink}
              id={edu.idEdu}
            />
          </li>
        ))}
      </ul>
    );
  }

  function createEduCVContent() {
    return (
      <ul className="cvEduBodyContainer">
        {allEdu.map((edu) => (
          <li key={"cv" + edu.idEdu} className="cvEduLi">
            {/* {console.log(job)} */}
            <h3 className="cvEduTitle">{edu.study}</h3>
            <h4 className="cvSchoolName">{edu.school}</h4>
            <div className="cvBottomLine">
              <p className="cvEduLocation">{edu.schoolLocation}</p>
              <p className="cvEduDate">{edu.schoolDate}</p>
            </div>
          </li>
        ))}
      </ul>
    );
  }


  // skills section

  const [nextSkillId, setnewNextSkillId] = useState(1);
  const [allSkills, setSkillsList] = useState([
    {
      idSkills: "0a",
      skill: "Copmuter Knitting"
    },
    {
      idSkills: "0b",
      skill: "Power nap Champion 1956"
    },
    {
      idSkills: "0c",
      skill: "Cheese eating pace of 75g/sec for 4 minutes"
    },
    {
      idSkills: "0d",
      skill: "Rocket Science"
    },
    {
      idSkills: "0e",
      skill: "Science of Rockets"
    },
  ]);
  const [skillShrink, setSkillShrink] = useState(["AC", ""]);

  function skillsContent(
    allSkills,
    setSkillsList,
    nextSkillId,
    setnewNextSkillId,
    skillShrink,
    setSkillShrink
  ) {
    return (
      <div className="skillInputContainer">
        <div className="skillDrop">
          <AddButton
            textContent="Add Skill"
            shrink={skillShrink}
            setShrink={setSkillShrink}
          />
          <div
            className={
              shrinkHandler(skillShrink)
                ? "skillForm"
                : "shrunk skillForm"
            }
          >
            <SkillsContentForm
              allSkills={allSkills}
              setSkillsList={setSkillsList}
              nextSkillId={nextSkillId}
              setnewNextSkillId={setnewNextSkillId}
              shrink={skillShrink}
              setShrink={setSkillShrink}
            />
          </div>
        </div>
        <div className="experienceEditsDDs">{createSkillDD()}</div>
      </div>
    );
  }

  function skillsDropDownHTML(skill) {
    return (
      <div className="skillDDContainer">
        <div className="skillDD">
          <h3 className="skillDDTitle">{skill}</h3>
          
        </div>
      </div>
    );
  }

  function editSkills(selectedID, editSkill) {
    
    let skillIndex = findIDIndex(selectedID, 'idSkills', allSkills);
    
    let newSkills = [...allSkills];
    newSkills[skillIndex] = {
      idSkills: selectedID,
      skill: editSkill
    };
    
    setSkillsList(newSkills);
  }

  function skillDropdownEditForm(
    inputID,
    editSkill
  ) {
    return (
      <div className="expDDFs">
        <div className="formBasicInput">
          <label htmlFor={inputID + "edit"}>{"Degree/Studies"}</label>
          <input
            className="singleLineInput"
            type="text"
            /*id={inputID}*/ name={inputID + "edit"}
            value={editSkill}
            onChange={(event) =>
              editSkills(
                inputID,
                event.target.value,
              )
            }
          />
        </div>
      </div>
    );
  }

  function createSkillDD() {
    return (
      <ul>
        {allSkills.map((skill) => (
          <li key={skill.idSkills}>
            <Dropdown
              text={skillsDropDownHTML(skill.skill)}
              content={skillDropdownEditForm(
                skill.idSkills,
                skill.skill,
                
              )}
              topShrink={skillShrink}
              topSetShrink={setSkillShrink}
              id={skill.idSkills}
            />
          </li>
        ))}
      </ul>
    );
  }

  function createSkillCVContent() {
    return (
      <ul className="cvEduBodyContainer">
        {allSkills.map((skill) => (
          <li key={"cv" + skill.idSkills} className="cvEduLi">
            <h3 className="cvSkillTitle">{skill.skill}</h3>
          </li>
        ))}
      </ul>
    );
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
            firstName,
            setLastName,
            lastName,
            setEmail,
            email,
            setPhone,
            phone,
            setAddress,
            address
          )}
        />
        <Dropdown text="Summary" content={summaryContent(setSummary)} />
        <Dropdown
          text="Work Experience"
          content={workContent(
            allJobs,
            setjobList,
            nextId,
            setnewNextId,
            addExperienceShrink,
            setAddExperienceShrink
          )}
          topShrink={addExperienceShrink}
          topSetShrink={setAddExperienceShrink}
        />
        <Dropdown
          text="Education"
          content={educationContent(
            allEdu,
            setEduList,
            nextEduId,
            setnewNextEduId,
            eduShrink,
            setEduShrink
          )}
          topShrink={eduShrink}
          topSetShrink={setEduShrink}
        />
        <Dropdown text="Skills" content={skillsContent(
          allSkills,
          setSkillsList,
          nextSkillId,
          setnewNextSkillId,
          skillShrink,
          setSkillShrink
        )}
        topShrink={skillShrink}
        topSetShrink={setSkillShrink} />
      </div>

      {/* Right Side - Autopopulated CV */}
      <div className="userOutput print">
        <div className="col1">
          <div className="cvName">
            <h1 className="firstName cvNameFont">
              {defaultCreator(firstName, "Average")}
            </h1>
            <h1 className="lastName cvNameFont">
              {defaultCreator(lastName, "Programmer")}
            </h1>
          </div>
          <div className="cvSummary">
            <h2 className="cvHeading">
              {createHeading("Summary", { summary })}
            </h2>
            <p className="cvSummaryBody">
              {defaultCreator(
                summary,
                "I am a programmer just trying to find my way around this electric rock. I've learned so much. I'm still learning. This is just another step in my journey of knowledge. With great knowledge comes great power. With great power comes great responsibility. With great responsibility comes great failure."
              )}
            </p>
          </div>
          <div className="cvWorkHistory">
            <h2 className="cvHeading">
              {createHeading("Experience", { allJobs })}
            </h2>
            <div className="workHistoryBody">{createExperienceCVContent()}</div>
          </div>
        </div>

        <div className="col2">
          <div className="cvContactInfo">
            <h2 className="cvHeading">
              {createHeading("Contact Info", { address }, { phone }, { email })}
            </h2>
            <div className="cvContactContent">
              <div className="cvAddressContainer">
                <div className="svgContainer">
                  {addIcon(getHomeIcon(), address)}
                </div>
                <p className="cvAddress">
                  {defaultCreator(
                    address,
                    "1952 McFake Drive, Toronto, ON, Canada"
                  )}
                </p>
              </div>
              <div className="cvPhoneContainer">
                <div className="svgContainer">
                  {addIcon(getPhoneIcon(), phone)}
                </div>
                <p className="cvPhone">
                  {defaultCreator(phone, "905-555-5555")}
                </p>
              </div>
              <div className="cvEmailContainer">
                <div className="svgContainer">
                  {addIcon(getEmailIcon(), email)}
                </div>
                <p className="cvEmail">
                  {defaultCreator(
                    email,
                    "programmerMcEmaillongemail@gmail.com"
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="cvEducation">
            <h2 className="cvHeading">
              {createHeading("Education", { allEdu })}
            </h2>
            <div className="eduHistoryBody">{createEduCVContent()}</div>
          </div>
          <div className="cvSkills">
            <h2 className="cvHeading">
              {createHeading("Skills", { allSkills })}
            </h2>
            <div className="skillsBody">{createSkillCVContent()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

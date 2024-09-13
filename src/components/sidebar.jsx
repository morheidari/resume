import { useState } from "react"
import { PersonalInformationInput, ProSummary, EditExperiences, EditEducations } from "./information-panels"
import { uuidv7 } from "uuidv7"


export default function SideBar(){
    const [isOpen, ChangeOpennes] = useState(true)
    const [personalInfo, changePersonalInfo] = useState({fullName:"", jobTitle:"", proSummary:""})
    const [experiences, changeExperiences] = useState([{id:uuidv7(),jobTitle:"mo", company:"re", from:"2024-10", to:"2024-12",description:"hi"},{id:uuidv7(),jobTitle:"morrrrrrrrrrrrrrrrrrrrrrrr", company:"rerrrrrrrrrrrrrr", from:"2024-10", to:"2024-12",description:"hi"}])
    const [educations, changeEducations] = useState([{id:uuidv7(),univeristy:'Aut', degree:'Bsc of Aerospace engineering', from:'2018-10', to:'2023-10'}]);
    function onChange(e){
        const id = e.target.id;
        const copy = {...personalInfo};
        copy[id] = e.target.value;
        changePersonalInfo(copy)
    }
    function onClick(){
        ChangeOpennes(!isOpen)
    }
    function returnClass(isOpen){
        if(isOpen)return 'open'
        else return 'close'
    }
    function addExp(exp){
        let copy = [...experiences];
        copy.push(exp)
        changeExperiences(copy)
    }

    function deleteExp(exp){
        let copy = [...experiences];
        copy = copy.filter(e=>e.id!==exp.id)
        changeExperiences(copy)
    }
    function editExp(exp){
        let copy = [...experiences];
        copy = copy.map(e=>{
            if(e.id!==exp.id) return e
            else return exp;
        }
        )
        changeExperiences(copy)
    }
    function addEdu(edu){
        let copy = [...educations];
        copy.push(edu)
        changeEducations(copy)
    }

    function deleteEdu(edu){
        let copy = [...educations];
        copy = copy.filter(e=>e.id!==edu.id)
        changeEducations(copy)
    }
    function editEdu(edu){
        let copy = [...educations];
        copy = copy.map(e=>{
            if(e.id!==edu.id) return e
            else return edu;
        }
        )
        changeEducations(copy)
    }
    return(
        <><aside id="edit-side-bar" className={returnClass(isOpen)}>
            <div className={`edit-panel ${returnClass(isOpen)}`}>
                <h1 className="edit-panel-title">add or edit information</h1>
                <EditSection title='Personal information'><PersonalInformationInput fullName={personalInfo.fullName} jobTitle={personalInfo.jobTitle} onChange={onChange}></PersonalInformationInput></EditSection>
                <EditSection title="Professional Summary"><ProSummary proSummary={personalInfo.proSummary} onChange={onChange}></ProSummary></EditSection>
                <EditSection title="Experiences"><EditExperiences experiences={experiences} addExp={addExp} deleteExp={deleteExp} editExp={editExp}></EditExperiences></EditSection>
                <EditSection title='Educations'><EditEducations educations={educations} addEdu={addEdu} deleteEdu={deleteEdu} editEdu={editEdu}></EditEducations></EditSection>
                </div>
        <button className={`edit-btn  ${returnClass(isOpen)}`} onClick={onClick}><ArrowIcon></ArrowIcon></button>
        </aside>
        </>
    )
}

function ArrowIcon(){
    return(
      <svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M30.83 32.67l-9.17-9.17 9.17-9.17-2.83-2.83-12 12 12 12z"/><path d="M0-.5h48v48h-48z" fill="none"/></svg>
    )
}

function MinusIcon(){
    return(
        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12Z" fill="#0F0F0F"/>
        </svg>)
}

function PlusIcon(){
    return(
        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 12H20M12 4V20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    )
}

function EditSection({children, title}){
    const [isOpen,changeOpennes] = useState(false)
    function btnText(isOpen){
        if(isOpen) return MinusIcon()
        else return PlusIcon()
    }
    function btnOnClick(){
        changeOpennes(!isOpen)
    }
    if(!isOpen){

        return(
            <div className="edit-section">
                <div className="title-extention">
            <h2 className="section-title">{title}</h2>
            <button className="extention-button" onClick={btnOnClick}>{btnText(isOpen)}</button>
                </div>
        </div>
    )
}
else return(
    <div className="edit-section">
                <div className="title-extention">
            <h2 className="section-title">{title}</h2>
            <button className="extention-button" onClick={btnOnClick}>{btnText(isOpen)}</button>
                </div>
                <div className="section-content">{children}</div>
        </div>
    )
}

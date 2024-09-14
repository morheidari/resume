import { useState } from "react"
import {uuidv7} from 'uuidv7';

// personal information inputs
export function PersonalInformationInput(prop){
    return(<div className="input-info personal-info">
        <Form>
        <Input id='fullName' value={prop.fullName} onChange={prop.onChange} placeholder="Full name"/>
        <Input id="jobTitle" value={prop.jobTitle} onChange={prop.onChange} placeholder="Job title"/>
        </Form>
    </div>)
}

// professional summary input
export function ProSummary(prop){
    return(<div className="input-info pro-summary">
        <Form>
            <textarea id="proSummary" value={prop.proSummary} onChange={prop.onChange} placeholder="Professional Summary" ></textarea>
        </Form>
    </div>)
}


// experience input
function AddExp(prop){
    return(<Form>
        <Input type='text' id='company'value={prop.company} onChange={prop.onChange} placeholder='company'></Input>
        <Input type='text' id='jobTitle'value={prop.jobTitle} onChange={prop.onChange} placeholder='Job title'></Input>
        <Input type='month' id='from' value={prop.from} onChange={prop.onChange} placeholder="From"></Input>
        <Input type='month' id='to' value={prop.to} onChange={prop.onChange} placeholder='To'></Input>
        <textarea value={prop.description} onChange={prop.onChange} id='description' placeholder="Add about your experience ..."></textarea>
        <div className="exp-input-btns">
            <button onClick={prop.add}>Add</button>
            <button onClick={prop.cancel}>Cancel</button>
            </div>
    </Form>)
}
// experiences history
function ExpHistory(prop){
    function MakeList(exp){
        return(<li key={exp.id} className='show-hisotry exp-history'>
            <div className="exp-company"><div>{exp.company}</div><span>{exp.company}</span></div>
            <div className="exp-job-title" ><div>{exp.jobTitle}</div><span>{exp.jobTitle}</span></div>
            <div className="exp-date"><div>{exp.from}&nbsp;to&nbsp;{exp.to}</div><span>{exp.from}&nbsp;to&nbsp;{exp.to}</span></div>
            <div className="history-btn">
            <button onClick={()=>prop.openEditExp(exp)}><Edit></Edit></button>
            <button onClick={()=>prop.deleteExp(exp)}><Delete></Delete></button>
            </div>
        </li>)
    }
    return(<div className="history exps-history">
        <ul className="exps">
        <li className="exp-titles">
            <div className="edu-degree">Company</div>
            <div className="edu-university">Title</div>
            <div className="edu-date">Date</div>
            </li>
            {prop.experiences.map(exp=>MakeList(exp))}
            </ul>
    </div>)
}
// experience edit
function EditExp(prop){
    return(<Form>
        <Input type='text' id='company'value={prop.company} onChange={prop.onChange} placeholder='company'></Input>
        <Input type='text' id='jobTitle'value={prop.jobTitle} onChange={prop.onChange} placeholder='Job title'></Input>
        <Input type='month' id='from' value={prop.from} onChange={prop.onChange} placeholder='from'></Input>
        <Input type='month' id='to' value={prop.to} onChange={prop.onChange} placeholder='to'></Input>
        <textarea value={prop.description} onChange={prop.onChange} id='description' placeholder="Add about your experience ..."></textarea>
        <div className="exp-input-btns">
            <button onClick={prop.editExp}>Edit</button>
            <button onClick={prop.cancel}>Cancel</button>
            </div>
    </Form>)
}

// experiences component
export function EditExperiences({experiences, addExp, editExp, deleteExp}){
    const emptyExp = {jobTitle:"", company:"", from:"", to:"", description:""}
    const [page, changePage] = useState('history')
    const [experience, changeExperience] = useState(emptyExp)
    function experienceOnChange(e){
        let copy = {...experience}
        const id = e.target.id;
        copy[id] = e.target.value;
        changeExperience(copy);
    }
    function cancel(){
        changeExperience(emptyExp)
        changePage('history')
    }
    function openEditExp(exp){
        changePage('edit')
        changeExperience(exp)
    }
    function add(){
        let exp = {id:uuidv7(),...experience}
        addExp(exp);
        cancel()
    }
    function edit(){
        editExp(experience);
        cancel()
    }
    if(page==='history'){
        return(<>
        <ExpHistory experiences={experiences} deleteExp={deleteExp} openEditExp={openEditExp}></ExpHistory>
        <button onClick={()=>changePage('add')} className='add-more'>+ Add One More</button>
        </>)
    }else if(page==='add'){
        return(<>
        <AddExp {...experience} onChange={experienceOnChange} add={add} cancel={cancel}></AddExp>
        </>)
    }else if(page==='edit'){
        return(<>
        <EditExp {...experience} onChange={experienceOnChange} editExp={edit} cancel={cancel}></EditExp>
        </>)
    }
}




// educations input
// education history
function EduHistory(prop){
    function MakeList(edu){
        return(<li key={edu.id} className='edu-history'>
            <div className="edu-university"><div>{edu.university}</div><span>{edu.university}</span></div>
            <div className="edu-degree"><div>{edu.degree}</div><span>{edu.degree}</span></div>
            <div className="edu-date"><div>{edu.from}&nbsp;to&nbsp;{edu.to}</div><span>{edu.from}&nbsp;to&nbsp;{edu.to}</span></div>
            <div className="history-btn">
            <button onClick={()=>prop.openEditEdu(edu)}><Edit></Edit></button>
            <button onClick={()=>prop.deleteEdu(edu)}><Delete></Delete></button>
            </div>
        </li>)
    }
    return(<div className="history edu-history">
        <ul className="edus">
            <li className="edu-titles">
            <div className="edu-university">Univeristy</div>
            <div className="edu-degree">Degree</div>
            <div className="edu-date">Date</div>
            </li>
            {prop.educations.map(edu=>MakeList(edu))}</ul>
    </div>)
}

// edit education

function EditEdu(prop){
    return(<Form>
        <Input type='text' id='university'value={prop.university} onChange={prop.onChange} placeholder='University'></Input>
        <Input type='text' id='degree'value={prop.degree} onChange={prop.onChange} placeholder='Degree'></Input>
        <Input type='month' id='from' value={prop.from} onChange={prop.onChange} placeholder='from'></Input>
        <Input type='month' id='to' value={prop.to} onChange={prop.onChange} placeholder='to'></Input>
        <div className="edu-input-btns">
            <button onClick={prop.editEdu}>Edit</button>
            <button onClick={prop.cancel}>Cancel</button>
            </div>
    </Form>)
}

// add education
function AddEdu(prop){
    return(<Form>
        <Input type='text' id='university'value={prop.university} onChange={prop.onChange} placeholder='University'></Input>
        <Input type='text' id='degree'value={prop.degree} onChange={prop.onChange} placeholder='Degree'></Input>
        <Input type='month' id='from' value={prop.from} onChange={prop.onChange} placeholder="From"></Input>
        <Input type='month' id='to' value={prop.to} onChange={prop.onChange} placeholder='To'></Input>
        <div className="edu-input-btns">
            <button onClick={prop.add}>Add</button>
            <button onClick={prop.cancel}>Cancel</button>
            </div>
    </Form>)
}


// edit educations component
export function EditEducations({educations, addEdu, editEdu, deleteEdu}){
    const emptyEdu = {university:"", degree:"", from:"", to:""}
    const [page, changePage] = useState('history')
    const [education, changeEducation] = useState(emptyEdu)
    function educationOnChange(e){
        let copy = {...education}
        const id = e.target.id;
        copy[id] = e.target.value;
        changeEducation(copy);
    }
    function cancel(){
        changeEducation(emptyEdu)
        changePage('history')
    }
    function openEditEdu(edu){
        changePage('edit')
        changeEducation(edu)
    }
    function add(){
        let edu = {id:uuidv7(),...education}
        addEdu(edu);
        cancel()
    }
    function edit(){
        editEdu(education);
        cancel()
    }
    if(page==='history'){
        return(<>
        <EduHistory educations={educations} deleteEdu={deleteEdu} openEditEdu={openEditEdu}></EduHistory>
        <button onClick={()=>changePage('add')} className='add-more'>+ Add One More</button>
        </>)
    }else if(page==='add'){
        return(<>
        <AddEdu {...education} onChange={educationOnChange} add={add} cancel={cancel}></AddEdu>
        </>)
    }else if(page==='edit'){
        return(<>
        <EditEdu {...education} onChange={educationOnChange} editEdu={edit} cancel={cancel}></EditEdu>
        </>)
    }
}





// skills input
export function EditSkills({skills,addSkill,deleteSkill}){
    const [skillInput, changeInput] = useState('')
    function changeText(e){
        changeInput(e.target.value)
    }
    function add(){
        if(skillInput.length>0){
            addSkill({id:uuidv7(),skill:skillInput})
            changeInput("")
        }
    }
    return(<>
    <div className="skills">
        <ul className="skills-list">
            {skills.map(skill=>{
                return(<li key={skill.id}><div className="skill-box">{skill.skill}<div className="delete-skill"><button onClick={()=>deleteSkill(skill)}><Cross></Cross></button></div></div></li>)
            })}
        </ul>
        </div>
    <div className="add-skill"><div>Add skill</div><div className="skill-input">
        <Input type='text' id='skill' value={skillInput} onChange={changeText}></Input></div>
        <button onClick={add}><PlusIcon></PlusIcon></button>
        </div>
    </>)
}





// contact input
export function EditContact(prop){
    return(<Form>
    <Input type="email" id="emai" value={prop.email} placeholder='Email' onChange={prop.onChange}></Input>
    <Input type="phone" id="phone" value={prop.phone} placeholder="Phone" onChange={prop.onChange}></Input>
    <Input type="url" id="linkedIn" value={prop.linkedIn} placeholder="LinkedIn" onChange={prop.onChange}></Input>
    <Input type="url" id="github" value={prop.github} placeholder='Github' onChange={prop.onChange}></Input>
    <Input type="url" id="website" value={prop.website} placeholder="Website" onChange={prop.onChange}></Input>
        </Form>)
}



// general input
function Input(prop){
    function returnClass(){
        if(prop.value.length>0) return 'active'
        else return null
    }
    function returnLabel(){
        if(prop.placeholder){
            return(<label for={prop.id} className={returnClass()}>{prop.placeholder}</label>)
        }else return null
    }
return(<div className='input'>
<input value={prop.value} onChange={prop.onChange} type={prop.type} id={prop.id}></input>
{returnLabel()}
</div>)
}


function TextArea(prop){
    function returnClass(){
        if(prop.value.length>0) return 'active'
        else return null
    }
return(<div className='input'>
<textarea value={prop.value} onChange={prop.onChange} id={prop.id}></textarea>
<label for={prop.id} className={returnClass()}>{prop.placeholder}</label>
</div>)
}

// general functions

function onSumbit(e){
    e.preventDefault()
}

function Form({children}){
    return(<form onSubmit={onSumbit}>{children}</form>)    
}



// icons


function Delete(){
    return(<>
    <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 12V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 12V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 7H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></>)
}

function Edit(){
    return(<>
    <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></>)
}
function PlusIcon(){
    return(
        <svg className="skill-icon" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 12H20M12 4V20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    )
}
function Cross(){
    return(<>
    <svg className='skill-icon' width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="#0F0F0F"/>
</svg></>)
}
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
        <Input type='text' id='jobTitle'value={prop.jobTitle} onChange={prop.onChange} placeholder='Job title'></Input>
        <Input type='text' id='company'value={prop.company} onChange={prop.onChange} placeholder='company'></Input>
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
        return(<li key={exp.id} className='exp-history'>
            <div className="exp-job-title">{exp.jobTitle}</div>
            <div className="exp-company">{exp.company}</div>
            <div className="exp-date">{exp.from}-{exp.to}</div>
            <div className="history-btn">
            <button onClick={()=>prop.openEditExp(exp)}><Edit></Edit></button>
            <button onClick={()=>prop.deleteExp(exp)}><Delete></Delete></button>
            </div>
        </li>)
    }
    return(<div className="history exps-history">
        <ul className="exps">{prop.experiences.map(exp=>MakeList(exp))}</ul>
    </div>)
}
// experience edit
function EditExp(prop){
    return(<Form>
        <Input type='text' id='jobTitle'value={prop.jobTitle} onChange={prop.onChange} placeholder='Job title'></Input>
        <Input type='text' id='company'value={prop.company} onChange={prop.onChange} placeholder='company'></Input>
        <Input type='month' id='from' value={prop.from} onChange={prop.onChange} placeholder='from'></Input>
        <Input type='month' id='to' value={prop.to} onChange={prop.onChange} placeholder='to'></Input>
        <textarea value={prop.description} onChange={prop.onChange} id='description'></textarea>
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


// skills input



// contact input



// general input
function Input(prop){
    function returnClass(){
        if(prop.value.length>0) return 'active'
        else return null
    }
return(<div className='input'>
<input value={prop.value} onChange={prop.onChange} type={prop.type} id={prop.id}></input>
<label for={prop.id} className={returnClass()}>{prop.placeholder}</label>
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

function isEmpty(value){
    if(value) return null
    else return 'empty'
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
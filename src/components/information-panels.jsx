import { useState } from "react"


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


// experiences input



// educations input


// skills input



// contact input



// general input
function Input(prop){
return(<div className='input'>
<input value={prop.value} onChange={prop.onChange} type={prop.type} id={prop.id}></input>
<label for={prop.id}>{prop.placeholder}</label>
</div>)
}

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
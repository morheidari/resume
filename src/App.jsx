import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Main from './components/main'
import SideBar from './components/sidebar'
import Resume from './components/resume'
import { uuidv7 } from "uuidv7"

function App() {
  const [personalInfo, changePersonalInfo] = useState({fullName:"Mohammadreza Heidari", jobTitle:"Front-End Developer", proSummary:"I'm a passioanate learner of front-end programming who tries to learn react and apply what he learns to create high quality codes and add value!"})
  const [experiences, changeExperiences] = useState([{id:uuidv7(),jobTitle:"mo", company:"re", from:"2024-10", to:"2024-12",description:"hi"}])
  const [educations, changeEducations] = useState([{id:uuidv7(),university:'Aut', degree:'Bsc of Aerospace engineering', from:'2018-10', to:'2023-10'}]);
  const [skills, changeSkills] = useState([{id:uuidv7(),skill:'react.js'}])
  const [contact, changeContact] = useState({email:"moreh412000@gmail.com", phone:"09190291589", linkedIn:"mohammadreza-heidari00", github:"", website:""})
  function contactOnChange(e){
      const id= e.target.id;
      const copy = {...contact}
      copy[id] = e.target.value;
      changeContact(copy);
  }
  function onChange(e){
      const id = e.target.id;
      const copy = {...personalInfo};
      copy[id] = e.target.value;
      changePersonalInfo(copy)
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
  function addSkill(skill){
      const copy = [...skills];
      copy.push(skill);
      changeSkills(copy)
  }
  function deleteSkill(skill){
      const copy = skills.filter(s=> s.id!==skill.id)
      changeSkills(copy)
  }


  return(<div className='app'>
    <Header></Header>
    <div className='app-body'>
    <SideBar personalInfo={personalInfo} experiences={experiences} educations={educations} skills={skills} contact={contact} onChange={onChange} contactOnChange={contactOnChange} addEdu={addEdu} addExp={addExp} addSkill={addSkill} deleteEdu={deleteEdu} deleteExp={deleteExp} deleteSkill={deleteSkill} editEdu={editEdu} editExp={editExp}></SideBar>
    <Main>
      <Resume personalInfo={personalInfo} experiences={experiences} educations={educations} skills={skills} contact={contact}></Resume>
    </Main>
    </div>
    </div>)
}

export default App


const lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, laboriosam quod ratione '

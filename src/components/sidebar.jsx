import { useState } from "react"

export default function SideBar(){
    const [isOpen, ChangeOpennes] = useState(true)
    function onClick(){
        ChangeOpennes(!isOpen)
    }
    function returnClass(isOpen){
        if(isOpen)return 'open'
        else return 'close'
    }
    return(
        <><aside id="edit-side-bar" className={returnClass(isOpen)}>
            <div className={`edit-panel ${returnClass(isOpen)}`}></div>
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
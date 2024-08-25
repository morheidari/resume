

export default function Resume({personalInfo,summary,educations,experiences,contact,skills}){
    return(
        <div className="resume">
            <div className="personal-info">
                <h1 className="full-name">{personalInfo.name}</h1>
                <h2 className="job-title">{personalInfo.title}</h2>
            </div>
            <div className="resume-container">
                <div className="container left">
                    <div className="educations">
                        <h2 className="education-section">Education</h2>
                        <div className="list list-of-educations">
                            {educations.map(education=>ShowEducation(education))}
                        </div>
                    </div>
                    <div className="contact">
                        <h2 className="contact-section">Contact</h2>
                        <div className="contact-info">
                        <h3 id="email">Email</h3>
                        <div className="email">{contact.email}</div>
                        <h3 id="phone">Phone</h3>
                        <div className="phone">{contact.phone}</div>
                        <h3 id="linkedin">LinkedIn</h3>
                        <div className="linkedin"><a href={contact.linkedin}>
                            {contact.linkedin}
                            </a>
                            </div>
                        <h3 id="github">Github</h3>
                        <div className="github"><a href={contact.github}>
                            {contact.github}
                            </a>
                            </div>
                        <h3 id="website">Website</h3>
                        <div className="website"><a href={contact.website}>
                            {contact.website}
                            </a>
                            </div>
                        </div>
                    </div>
                     <div className="skills">
                        <h2 className="skill-section">Skills</h2>
                          <div className="list list-of-skills">
                               {skills.map(skill=>ShowSkill(skill))}
                          </div>
                     </div>
                </div>
                <div className="container right">
                    <div className="summary">
                        <h2 className="profesional-summary">Profesional summary</h2>
                        <p className="summary-text">{summary}</p>
                    </div>
                    <div className="experiences">
                        <h2 className="experience-section">Experience</h2>
                        <div className="list-of-experiences list">
                            {experiences.map(experience=>ShowExperience(experience))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ShowEducation(education){
    return(
        <li key={education.id}>
            <div className="date">{`${education.from}-${education.to}`}</div>
            <div className="degree">{education.degree}</div>
            <div className="university">{education.university}</div>
        </li>
    )
}

function ShowExperience(experience){
    return(
        <li key={experience.id}>
            <div className="experience-left-seg">
                <div className="experience-date">{`${experience.form}-${experience.to}`}</div>
                <div className="experience-co">{experience.company}</div>
            </div>
            <div className="experience-right-seg">
                <div className="experience-title">{experience.title}</div>
                <div className="description">{experience.description}</div>
            </div>
        </li>
    )
}

function ShowSkill(skill){
    return(
        <li key={skill.id} className='skill'>
            {skill.name}
        </li>
    )
}
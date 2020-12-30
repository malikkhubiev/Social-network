import React from 'react';
import person from './Person.module.css';
import PersonStatus from './PersonStatus';
const Person = (props) => {
    return (
        <div className={person.person}>
            <div className={person.personTopimg}></div>
            <div className={person.personData}>
                <div className={person.personDataAva}></div>
                <div className={person.personDataDesc}>
                    <p className={person.personDataDescName}>{props.profile.name}</p>
                    <PersonStatus {...props}/>
                    <p className={person.personDataDescDesc}><b>Обо мне:</b> {props.profile.aboutMe}</p>
                    <p className={person.personDataDescDesc}><b>Сведения о работе:</b>{props.profile.lookingForAJob ? <p className={person.personDataDescDesc}>В поиске работы</p> : <p className={person.personDataDescDesc}>У меня отличная работа</p>}</p>
                    <p className={person.personDataDescDesc}><b>Education:</b> RSEU Rinh</p>
                </div>
            </div>
        </div>
    )
}
export default Person;
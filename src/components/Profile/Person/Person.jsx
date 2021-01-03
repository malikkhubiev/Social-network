import React from 'react';
import person from './Person.module.css';
import PersonStatus from './PersonStatus';
import ava from './../../../images/brain.jpg';
const Person = (props) => {
    return (
        <div className={person.person}>
            <div className={person.personTopimg}></div>
            <div className={person.personData}>
                <img src={ava} alt={'avatar'} className={person.personDataAva}/>
                <div className={person.personDataDesc}>
                    <p className={person.personDataDescName}>{props.profile.name}</p>
                    {props.profile.isMainUser?<PersonStatus {...props}/>:<p className={person.personDataDescDesc}>{props.profile.status}</p>}
                    <div className={person.personDataDescDesc}><b>Обо мне:</b> {props.profile.aboutMe}</div>
                    <div className={person.personDataDescDesc}><b>Сведения о работе:</b>{props.profile.lookingForAJob ? <p className={person.personDataDescDesc}>В поиске работы</p> : <p className={person.personDataDescDesc}>У меня отличная работа</p>}</div>
                    <div className={person.personDataDescDesc}><b>Образование:</b> RSEU Rinh</div>
                </div>
            </div>
        </div>
    )
}
export default Person;
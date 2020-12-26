import React from 'react';
import person from './Person.module.css';
import ava from './../../../images/brain.jpg';
import PersonStatus from './PersonStatus';
const Person = (props) => {
    let photo = props.profile.photos.large === null?ava:props.profile.photos.large;
    return (
        <div className={person.person}>
            <div className={person.personTopimg}></div>
            <div className={person.personData}>
                <img src={photo} className={person.personDataAva} />
                <div className={person.personDataDesc}>
                    <p className={person.personDataDescName}>{props.profile.fullName}</p>
                    <PersonStatus {...props}/>
                    <p className={person.personDataDescDesc}>Обо мне: {props.profile.aboutMe}</p>
                    {props.profile.lookingForAJob ? <p className={person.personDataDescDesc}>В поиске работы</p> : <p className={person.personDataDescDesc}>У меня отличная работа</p>}
                    <p className={person.personDataDescDesc}>Education: RSEU Rinh</p>
                </div>
            </div>
        </div>
    )
}
export default Person;
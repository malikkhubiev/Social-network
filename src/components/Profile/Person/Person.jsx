import React from 'react';
import person from './Person.module.css';
import PersonStatus from './PersonStatus';
const Person = (props) => {
    return (
        <div className={person.person}>
            <img className={person.personTopimg} src="https://мобильныйсервис.рф/wp-content/uploads/2020/04/download-oneplus-5-wallpapers-preview.jpg" />
            <div className={person.personData}>
                <img src={props.profile.photos.large} className={person.personDataAva} />
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
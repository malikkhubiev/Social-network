import React from 'react';
import person from './Person.module.css';
const Person = () => {
    return (
        <div className={person.person}>
            <img className={person.personTopimg} src="https://мобильныйсервис.рф/wp-content/uploads/2020/04/download-oneplus-5-wallpapers-preview.jpg" />
            <div className={person.personData}>
                <img src='https://www.firestock.ru/wp-content/uploads/2013/08/Tree-Brain-Fotolia_39427988.jpg' className={person.personDataAva} />
                <div className={person.personDataDesc}>
                    <p className={person.personDataDescName}>Malik Khubiev</p>
                    <p className={person.personDataDescDesc}>Date of Birthday: February 15</p>
                    <p className={person.personDataDescDesc}>City: Cherkessk</p>
                    <p className={person.personDataDescDesc}>Education: RSEU Rinh</p>
                </div>
            </div>
        </div>
    )
}
export default Person;
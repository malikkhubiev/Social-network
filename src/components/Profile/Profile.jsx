import React from 'react';
import p from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
const Profile = () => {
    return (
        <div className={p.mainContent}>
            <div className={p.top}>
                <img src="https://w-dog.ru/wallpapers/3/4/310434283512626.jpg" />
            </div>
            <div className={p.bottom}>
                <div className={p.person}>
                    <img src='https://www.firestock.ru/wp-content/uploads/2013/08/Tree-Brain-Fotolia_39427988.jpg' className={p.ava} />
                    <div className={p.description}>
                        <p className={p.name}>Malik Khubiev</p>
                        <p className={p.desc}>Date of Birthday: February 15</p>
                        <p className={p.desc}>City: Cherkessk</p>
                        <p className={p.desc}>Education: RSEU Rinh</p>
                    </div>
                </div>
                <MyPosts/>
            </div>
        </div>
    )
}
export default Profile;
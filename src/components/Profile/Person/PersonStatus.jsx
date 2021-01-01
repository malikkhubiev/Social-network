import React, { useState } from 'react';
import person from './Person.module.css';
const PersonStatus = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);
    let changeStatus = (e) => {
        let text = e.target.value;
        setStatus(text);
    }
    let activateEditMode = () => {
        setEditMode(true);
    }
    let deActivateEditMode = () => {
        setEditMode(false);
        props.changeStatus(status);
    }
    return (
        <div className={person.personStatus}>
            {editMode === false?
            <div>
                <p onDoubleClick={activateEditMode}>{status}</p>
            </div>
            :
            <div>
                <input onChange={e=>changeStatus(e)} autoFocus={true} onBlur={deActivateEditMode} value={status} />
            </div>}
        </div>
    )
}
export default PersonStatus;
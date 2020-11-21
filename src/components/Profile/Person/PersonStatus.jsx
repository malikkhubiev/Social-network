import React from 'react';
import person from './Person.module.css';
class PersonStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            title: 'Hi'
        }
    }
    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false,
        })
    }
    render() {
        return (
            <div className={person.personStatus}>
                {this.state.editMode === false?
                <div>
                    <p onDoubleClick={this.activateEditMode}>{this.state.title}</p>
                </div>
                :
                <div>
                    <input autoFocus={true} onBlur={this.deActivateEditMode} value={this.state.title} />
                </div>}
            </div>
        )
    }
}
export default PersonStatus;
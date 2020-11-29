import React from 'react';
import person from './Person.module.css';
class PersonStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            status: this.props.status,
        }
    }
    changeStatus (e) {
        let text = e.target.value;
        this.setState({
            status: text,
        })
    }
    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false,
        });
        this.props.setStatus(this.state.status);
    }
    render() {
        return (
            <div className={person.personStatus}>
                {this.state.editMode === false?
                <div>
                    <p onDoubleClick={this.activateEditMode}>{this.state.status}</p>
                </div>
                :
                <div>
                    <input onChange={e=>this.changeStatus(e)} autoFocus={true} onBlur={this.deActivateEditMode} value={this.state.status} />
                </div>}
            </div>
        )
    }
}
export default PersonStatus;
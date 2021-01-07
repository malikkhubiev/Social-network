import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getMessages, getShouldBe, getUserId } from '../common/Selectors/profile-selectors';
import { getAllUsers } from '../common/Selectors/users-selectors';
import { getUser, sendMessage } from './../../redux/profile-reducer';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
    return {
        id: getUserId(state),
        shouldDialogBoxBeOpened: getShouldBe(state),
        users: getAllUsers(state),
        messages: getMessages(state),
    };
}

export default compose(
    connect(mapStateToProps, { sendMessage, getUser }),
    withAuthRedirect,
)(Dialogs);
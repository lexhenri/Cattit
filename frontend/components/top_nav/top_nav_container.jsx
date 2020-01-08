import { connect } from 'react-redux';
import TopNav from './top_nav';
import { logout } from '../../actions/session';
import { currentUser } from '../../reducers/selectors';
import { openModal } from '../../actions/modal';

const mapStateToProps = state => ({
  currentUser: currentUser(state)
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(TopNav)
import { connect } from 'react-redux';
import TopNav from './top_nav';
import { logout } from '../../actions/session';
import { currentUser } from '../../reducers/selectors';

const mapStateToProps = state => ({
  currentUser: currentUser(state)
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(TopNav)
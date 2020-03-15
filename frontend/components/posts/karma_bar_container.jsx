import { connect } from 'react-redux';
import { clearErrors } from '../../actions/session';
import KarmaBar from './karma_bar';
import { currentUser } from '../../reducers/selectors';
import { giveUpdoot, removeUpdoot, giveDowndoot, removeDowndoot } from '../../actions/updoots';
import { openModal, closeModal } from '../../actions/modal';


const mSTP = (state, ownProps) => {
  return {
    posts: state.entities.posts,
    currentUser: currentUser(state),
  }
};

const mDTP = dispatch => ({
  fetchPost: (postId) => dispatch(fetchPost(postId)),
  giveUpdoot: post => dispatch(giveUpdoot(post)),
  removeUpdoot: post => dispatch(removeUpdoot(post)),
  giveDowndoot: post => dispatch(giveDowndoot(post)),
  removeDowndoot: post => dispatch(removeDowndoot(post)),
  closeModal: () => dispatch(closeModal()),
  openModal: modal => dispatch(openModal(modal)),
});

export default connect(mSTP, mDTP)(KarmaBar)
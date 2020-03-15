export const currentUser = state => {
  return state.entities.users[state.session.id]
};

export const findSubcat = (state, match) => {
  let cat = {};
  Object.values(state.entities.subcattits).forEach(subcat => subcat.name === match ? cat = subcat : null );
  // debugger;
  return cat;
}

export const findPosts = (state, match) => {
  let posts = {};
  Object.values(state.entities.posts).forEach(post => post.name === match ? post = post : null );
  // debugger;
  return posts;
}

export const findUserUpdoots = (updoots, currentUser) => {
  let userUpdoots = {};
  Object.values(updoots).forEach(updoot => updoot.user_id === currentUser.id ? userUpdoots = updoot : null );
  return userUpdoots;
}

export const findUserDowndoots = (downdoots, currentUser) => {
  let userDowndoots = {};
  Object.values(downdoots).forEach(downdoot => downdoot.user_id === currentUser.id ? userDowndoots = downdoot : null );
  return userDowndoots;
}

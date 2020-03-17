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
  if (!updoots) return false;
  let userUpdoots = false;
  if (currentUser === undefined) return null;
  Object.values(updoots).forEach(updoot => updoot.user_id === currentUser.id ? userUpdoots = true : null );
  return userUpdoots;
}

export const findUserDowndoots = (downdoots, currentUser) => {
  if (!downdoots) return false;
  let userDowndoots = false;
  if (currentUser === undefined) return null;
  Object.values(downdoots).forEach(downdoot => downdoot.user_id === currentUser.id ? userDowndoots = true : null );
  return userDowndoots;
}

// export const findUserUpdoot = (updoots, currentUser) => {
//   let upDoot = {};
//   if (currentUser === undefined) return null;
//   Object.values(updoots).forEach(updoot => updoot.user_id === currentUser.id ? updoot = upDoot : null );
//   return upDoot;
// }

export const findTotalDoots = (updoots, downdoots) => {
  let upDoots = Object.keys(updoots).length;
  let downDoots = Object.keys(downdoots).length;
  let totalDoots = (upDoots - downDoots);
  return totalDoots;
}

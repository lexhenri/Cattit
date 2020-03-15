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

// Object.values(Updoots).filter(updoot => updoot.user_id === currentUser.id)

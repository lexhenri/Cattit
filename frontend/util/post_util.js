export const createPost = (post) => (
  $.ajax({
    url: `/api/subcattits/${post.subcattit_name}/posts`,
    method: 'POST',
    data: { post }
  })
)

export const getPosts = (postSubcattitId) => (
  $.ajax({
    url: `/api/subcattits/${postSubcattitId}/posts`,
    method: 'GET'
  })
)

export const getAllPosts = () => (
  $.ajax({
    url: `/api/posts/all`,
    method: 'GET'
  })
)

export const getPost = (post) => (
  $.ajax({
    url: `/api/posts/${post.id}`,
    method: 'GET'
  })
)

  export const removePost = (postId) => (
  $.ajax({
    url: `/api/posts/${postId}`,
    method: 'DELETE'
  })
)

export const createPhoto = (photo) => (
  $.ajax({
    method: 'POST',
    url: `/api/subcattits/${photo.subcattit}/posts`,
    data: photo,
    contentType: false,
    processData: false
  })
);

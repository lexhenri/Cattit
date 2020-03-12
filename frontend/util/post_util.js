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

export const postImage = (subcattit) => (
  $.ajax({
    url: `/api/subcattits/${subcattit}/posts`,
    method: 'POST',
    data: formData,
    contentType: false,
    processData: false
  })
)

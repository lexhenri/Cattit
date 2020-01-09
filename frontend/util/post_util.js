export const createPost = (post) => (
  $.ajax({
    url: `/api/posts`,
    method: 'POST',
    data: { post }
  })
)

export const getPosts = (subcattit) => (
  $.ajax({
    url: `/api/cat/${subcattit}/posts`,
    method: 'GET'
  })
)

export const getPost = (post, subcattit) => (
  $.ajax({
    url: `/api/cat/${subcattit}/${post.id}`,
    method: 'GET'
  })
)

  export const removePost = (postId, subcattit) => (
  $.ajax({
    url: `/api/cat/${subcattit}/${postId}`,
    method: 'DELETE'
  })
)

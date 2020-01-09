export const makePost = (post, subcattit) => (
  $.ajax({
    url: `api/${subcattit}/post`,
    method: 'POST',
    data: { post }
  })
)

export const getPosts = (subcattit) => (
  $.ajax({
    url: `api/${subcattit}/posts`,
    method: 'GET'
  })
)

export const getPost = (postId, subcattit) => (
  $.ajax({
    url: `api/${subcattit}/${postId}`,
    method: 'GET'
  })
)

  export const removePost = (postId, subcattit) => (
  $.ajax({
    url: `api/${subcattit}/${postId}`,
    method: 'DELETE'
  })
)

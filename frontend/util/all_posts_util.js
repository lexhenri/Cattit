export const getPosts = () => (
  $.ajax({
    url: `/api/posts/all`,
    method: 'GET'
  })
)

export const getPost = (post) => (
  $.ajax({
    url: `/api/post/${post.id}`,
    method: 'GET'
  })
)
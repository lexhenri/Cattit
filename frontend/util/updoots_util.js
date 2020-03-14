export const createUpdoot = (post) => (
  $.ajax({
    url: `/api/posts/${post.id}/updoots`,
    method: 'POST',
    data: { post }
  })
)


export const destroyUpdoot = (post) => (
  $.ajax({
    url: `/api/posts/${post.id}/updoots/`,
    method: 'DELETE',
  })
)

export const createDowndoot = (post) => (
  $.ajax({
    url: `/api/posts/${post.id}/downdoots`,
    method: 'POST',
    data: { post }
  })
)


export const destroyDowndoot = (post) => (
  $.ajax({
    url: `/api/posts/${post.id}/downdoots/`,
    method: 'DELETE',
  })
)

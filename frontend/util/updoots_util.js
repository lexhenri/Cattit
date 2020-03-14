export const createUpdoot = (post) => (
  $.ajax({
    url: `/api/posts/${post.id}/updoots`,
    method: 'POST',
    data: { post }
  })
)


export const destroyUpdoot = (post) => (
  $.ajax({
    url: `/api/posts/${post.id}/updoots/${post.updoots.id}`,
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


export const destroyDowndoot = (downdoot) => (
  $.ajax({
    url: `/api/posts/${post.id}/downdoots/${downdoot.id}`,
    method: 'DELETE',
  })
)

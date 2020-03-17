export const createUpdoot = (updoot) => (
  $.ajax({
    url: `/api/posts/${updoot.post_id}/updoots/`,
    method: 'POST',
    data: { updoot }
  })
)


export const destroyUpdoot = (updoot) => (
  $.ajax({
    url: `/api/posts/${updoot.post_id}/updoots/`,
    method: 'DELETE',
  })
)

export const createDowndoot = (downdoot) => (
  $.ajax({
    url: `/api/posts/${downdoot.post_id}/downdoots/`,
    method: 'POST',
    data: { downdoot }
  })
)


export const destroyDowndoot = (downdoot) => (
  $.ajax({
    url: `/api/posts/${downdoot.post_id}/downdoots/`,
    method: 'DELETE',
  })
)

// export const fetchUpdoots = (post) => (
//   $.ajax({
//     url: `/api/posts/${post.id}/updoots/all/`,
//     method: 'GET'
//   })
// )

// export const fetchDowndoots = (post) => (
//   $.ajax({
//     url: `/api/posts/${post.id}/downdoots/all/`,
//     method: 'GET'
//   })
// )

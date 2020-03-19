export const getUser = (userId) => (
  $.ajax({
    url: `/api/users/${userId}`,
    method: 'GET'
  })
)

export const getSubscribes = (userId) => (
  $.ajax({
    url: `api/users/${userId}/subscribes`,
    method: 'GET'
  })
)
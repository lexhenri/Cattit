
export const getSubcattit = (subcattit) => (
  $.ajax({
    url: `/api/subcattits/${subcattit}/`,
    method: 'GET'
  })
)

export const createSubcattit = subcattit => (
  $.ajax({
    url: `/api/subcattits/`,
    method: 'POST',
    data: { subcattit }
  })
)

export const getAllSubcattits = () => (
  $.ajax({
    url: '/api/subcattits/',
    method: 'GET'
  })
)
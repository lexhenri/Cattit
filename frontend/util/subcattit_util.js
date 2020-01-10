
export const getSubcattit = (subcattit) => (
  $.ajax({
    url: `/api/subcattit/${subcattit}/`,
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
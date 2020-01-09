
export const getSubcattit = (subcattitId) => (
  $.ajax({
    url: `/api/subcattit/${subcattitId}/`,
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
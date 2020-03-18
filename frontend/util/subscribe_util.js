export const createSubscribe = (subscribe) => (
  $.ajax({
    url: `/api/subcattits/${subscribe.subcattit_id}/subscribes/`,
    method: 'POST',
    data: { subscribe }
  })
)


export const destroySubscribe = (subscribe) => (
  $.ajax({
    url: `/api/subcattits/${subscribe.subcattit_id}/subscribes/`,
    method: 'DELETE',
  })
)
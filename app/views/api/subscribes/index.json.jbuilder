
# json.set! @subscribe.id do
  json.extract! @subscribe, :user_id, :subcattit_id
  json.subcattit_name @subscribe.subcattit.name
# end
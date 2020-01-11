# json.extract! @posts, :id, :title, :body

json.array! @posts do |post|
  json.extract! post, :title, :body, :subcattit_id, :author_id, :id
  json.extract! post.user, :id, :username

end

#add email and follows later?


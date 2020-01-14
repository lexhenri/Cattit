# json.extract! @posts, :id, :title, :body

json.array! @posts do |post|
  json.extract! post, :title, :body, :subcattit_name, :author_id, :id, :created_at, :updated_at, :num_comments
  json.extract! post.user, :id, :username

end

#add email and follows later?


# json.extract! @posts, :id, :title, :body

json.array! @posts do |post|
  json.extract! post, :title, :body, :author_id, :id, :created_at, :updated_at, :num_comments, :upvotes, :subcattit_id, :photo
  json.name post.subcattit.name
  json.username post.user.username

end

#add email and follows later?


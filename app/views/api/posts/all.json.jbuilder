
json.array! @allposts do |post|
  json.extract! post, :title, :body, :author_id, :id, :created_at, :updated_at, :num_comments, :upvotes, :subcattit_id
  json.name post.subcattit.name
  json.username post.user.username

end
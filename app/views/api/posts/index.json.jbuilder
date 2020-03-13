# json.extract! @posts, :id, :title, :body
  @posts.each do |post|
  json.set! post.id do
    json.extract! post, :title, :body, :author_id, :id, :created_at, :updated_at, :num_comments, :upvotes, :subcattit_id, :linkUrl, :photo
    json.name post.subcattit.name
    json.username post.user.username
    if post.photo.attached?
        json.imageUrl url_for(post.photo)
    else 
        json.imageUrl ""
      end
    end
  end

#add email and follows later?


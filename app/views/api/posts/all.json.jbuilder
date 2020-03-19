

 @allposts.each do |post|
  json.set! post.id do
    json.extract! post, :title, :body, :author_id, :id, :created_at, :updated_at, :num_comments, :upvotes, :subcattit_id, :linkUrl, :updoots, :downdoots
    if post.photo.attached?
        json.imageUrl url_for(post.photo)
    else 
        json.imageUrl ""
    end
    json.name post.subcattit.name
    json.username post.user.username
    json.subcattit post.subcattit, :name, :description, :num_subscribers, :num_online, :created_at, :num_members, :num_online, :member_desc, :online_desc
    json.subcattit do
      if post.subcattit.icon.attached?
        json.iconUrl url_for(post.subcattit.icon)
      else 
          json.iconUrl ""
        end
      end
    end
  end

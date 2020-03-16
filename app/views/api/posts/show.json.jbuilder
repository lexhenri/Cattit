 json.set! @post.id do
    json.extract! @post, :title, :body, :author_id, :id, :created_at, :updated_at, :num_comments, :upvotes, :subcattit_id, :linkUrl, :photo, :updoots, :downdoots
    json.name @post.subcattit.name
    json.username @post.user.username
    json.totalDoots post.updoots.length - post.downdoots.length
    if @post.photo.attached?
        json.imageUrl url_for(@post.photo)
    else 
        json.imageUrl ""
      end
    end

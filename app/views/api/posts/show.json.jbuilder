json.extract! @post, :title, :body, :subcattit_name, :author_id, :id, :user, :created_at, :updated_at, :post_type
    @post.user do
      json.id @post.user.id
      json.username @post.user.username
      if @post.photo.attached?
        json.imageUrl url_for(@post.photo)
      else 
        json.imageUrl ""
      end
    end

    #this is the one NOT returning shit atm
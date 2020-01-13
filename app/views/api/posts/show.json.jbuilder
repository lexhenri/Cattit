json.extract! @post, :title, :body, :subcattit_id, :author_id, :id, :user, :created_at, :updated_at
    @post.user do
      json.id @post.user.id
      json.username @post.user.username
    end

    #this is the one NOT returning shit atm
json.extract! @post, :title, :body, :subcattit_id, :author_id, :id, :user
    @post.user do
      json.id @post.user.id
      json.username @post.user.username
    end

    #this is the one NOT returning shit atm
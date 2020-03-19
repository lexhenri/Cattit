

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

# json.array! @allposts do |post|
#   json.extract! post, :title, :body, :author_id, :id, :created_at, :updated_at, :num_comments, :upvotes, :subcattit_id, :photo, :linkUrl, :updoots, :downdoots
#   json.name post.subcattit.name
#   json.username post.user.username
#   json.totalDoots post.updoots.length - post.downdoots.length
#   if post.photo.attached?
#       json.imageUrl url_for(post.photo)
#   else 
#       json.imageUrl ""
#     end
# end

#  id              :bigint           not null, primary key
#  name            :string           not null
#  description     :text
#  moderator_ids   :integer          default([]), is an Array
#  subscriber_ids  :integer          default([]), is an Array
#  num_subscribers :integer          default(0)
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  num_members     :string           default("0")
#  num_online      :string           default("0")
#  member_desc     :string           default("members")
#  online_desc     :string           default("online")
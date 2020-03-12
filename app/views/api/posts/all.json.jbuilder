
json.array! @allposts do |post|
  json.extract! post, :title, :body, :author_id, :id, :created_at, :updated_at, :num_comments, :upvotes, :subcattit_id, :photo, :linkUrl
  json.name post.subcattit.name
  json.username post.user.username
  if post.photo.attached?
      json.imageUrl url_for(post.photo)
  else 
      json.imageUrl ""
    end
end

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
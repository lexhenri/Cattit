
# json.extract! @subcattit, :name, :id, :description, :created_at, :num_members, :num_online, :member_desc, :online_desc
# json.iconUrl url_for(@subcattit.icon)
# json.bannerUrl url_for(@subcattit.banner)
# # json.set! :name do 
# #   name :name
# #   id :id
# #   description :description
# # end

#  json.set! @subcattit.id do
    json.extract! @subcattit, :name, :id, :description, :created_at, :num_members, :num_online, :member_desc, :online_desc, :icon, :banner, :subscribes
    if @subcattit.icon.attached?
       json.iconUrl url_for(@subcattit.icon)
       json.bannerUrl url_for(@subcattit.banner)
    else
      json.bannerUrl ""
      json.iconUrl ""
    end
   

    json.extract! @subcattit, :name, :id, :description, :created_at, :num_members, :num_online, :member_desc, :online_desc, :subscribes
    if @subcattit.icon.attached?
       json.iconUrl url_for(@subcattit.icon)
       json.bannerUrl url_for(@subcattit.banner)
    else
      json.bannerUrl ""
      json.iconUrl ""
    end
  
   
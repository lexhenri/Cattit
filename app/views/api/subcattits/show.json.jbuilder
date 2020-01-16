json.extract! @subcattit, :name, :id, :description, :created_at, :num_members, :num_online, :member_desc, :online_desc
json.set! :name do 
  name :name
  id :id
  description :description
end
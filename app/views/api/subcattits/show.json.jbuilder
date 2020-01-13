json.extract! @subcattit, :name, :id, :description, :created_at 
json.set! :name do 
  name :name
  id :id
  description :description
end
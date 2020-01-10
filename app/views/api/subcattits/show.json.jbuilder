json.extract! @subcattit, :name, :id, :description
json.set! :name do 
  name :name
  id :id
  description :description
end
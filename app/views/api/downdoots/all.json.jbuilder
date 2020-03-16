json.array! @downdoots.each do |downdoot|
  json.set! downdoot.id do
    json.extract! downdoot, :user_id, :post_id, :id
  end
end
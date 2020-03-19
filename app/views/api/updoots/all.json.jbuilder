json.array! @updoots.each do |updoot|
  json.set! updoot.id do
    json.extract! updoot, :user_id, :post_id, :id
  end
end

# this does nothing i think but i'm scared to delete
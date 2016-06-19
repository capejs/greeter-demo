json.errors do
  @visitor.errors.keys.each do |key|
    json.set! key do
      json.array! @visitor.errors.full_messages_for(key)
    end
  end
end

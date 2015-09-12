json.array!(@rentables) do |rentable|
  json.extract! rentable, :id, :description, :price, :owner_id
  json.url rentable_url(rentable, format: :json)
end

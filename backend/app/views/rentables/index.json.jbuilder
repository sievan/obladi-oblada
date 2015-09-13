json.array!(@rentables) do |rentable|
  json.extract! rentable, :id, :description, :price, :owner_id, :title
  json.url rentable_url(rentable, format: :json)
end

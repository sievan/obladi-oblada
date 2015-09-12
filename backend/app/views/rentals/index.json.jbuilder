json.array!(@rentals) do |rental|
  json.extract! rental, :id, :rentable_id, :user_id
  json.url rental_url(rental, format: :json)
end

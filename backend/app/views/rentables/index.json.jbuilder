json.array!(@rentables) do |rentable|
  json.extract! rentable, :id, :description, :price, :user_id, :image, :rentals, :title, :user
  json.url rentable_url(rentable, format: :json)
  json.rentals rentable.rentals do |rental|
  	json.rental rental
  	json.user rental.user
  end
end

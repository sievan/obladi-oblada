json.array!(@customers) do |customer|
  json.extract! customer, :id, :rentable_id, :user_id
  json.url customer_url(customer, format: :json)
end

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

names =  ["Jocke", "Osquar", "Lasse Kongo", "Embraquel D Tuta"]

Authentication.destroy_all
AuthenticationToken.destroy_all
Rental.destroy_all
Rentable.destroy_all
User.destroy_all

names.each do |n|
  User.create name: n
end

User.all.each do |u|
  (1..5).to_a.sample.times do |n|
    u.rentables.create description: "#{u.name}s coola grej #{n}", title: "Item #{n}"
  end
end

User.all.each do |u|
  (1..5).to_a.sample.times do |n|
    Rental.create user: u, rentable: Rentable.all.sample
  end
end

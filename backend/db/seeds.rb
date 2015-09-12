# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

names =  ["Jocke", "Osquar", "Lasse Kongo", "Embraquel D Tuta"]

names.each do |n|
  User.create name: names[n]
end

User.each do |u|
  Owner.create user: u
  (1..5).to_a.sample.times do |n|
    Rentable.create owner: u.owner, description: "#{u.name}s coola grej #{n}"
  end
end

User.each do |u|
  Rental.create user: u
  (1..5).to_a.sample.times do |n|

  end
end

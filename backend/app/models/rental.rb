class Rental < ActiveRecord::Base
  belongs_to :rentable
  belongs_to :user
end

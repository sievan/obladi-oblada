class Rentable < ActiveRecord::Base
  belongs_to :owner
  has_many :rentals

  def owner_name
    owner.user.name
  end
end

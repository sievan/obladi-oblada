class User < ActiveRecord::Base
  def to_s
    name
  end

  has_one :owner
  has_many :rentables, through: :owner
  has_many :rentals
end

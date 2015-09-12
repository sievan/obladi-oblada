class Rentable < ActiveRecord::Base
  belongs_to :owner

  def owner_name
    owner.user.name
  end
end

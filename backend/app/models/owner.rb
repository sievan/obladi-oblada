class Owner < ActiveRecord::Base
  belongs_to :user
  delegates :user, :name
end

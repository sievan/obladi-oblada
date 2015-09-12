class User < ActiveRecord::Base
  def to_s
    name
  end

  def self.find_or_create_from_omniauth(_omniauth_info)
    User.first
  end

  def auth_token
    authentication_tokens.first || authentication_tokens.create
  end

  has_one :owner
  has_many :rentables, through: :owner
  has_many :rentals
  has_many :authentications
  has_many :authentication_tokens
end

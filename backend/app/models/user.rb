class User < ActiveRecord::Base
  def to_s
    name
  end

  def self.find_or_create_from_omniauth(omniauth_hash)
    authentication = Authentication.find_or_new_from_omniauth(omniauth_hash)
    authentication.user ||=
      authentication.user.create name: omniauth_hash[:info][:name]
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

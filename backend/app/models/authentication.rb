class Authentication < ActiveRecord::Base
  belongs_to :user

  def self.find_or_new_from_omniauth(omniauth_hash)
    create(
      provider: omniauth_hash[:provider],
      uid: omniauth_hash[:uid]
    )
  end
end

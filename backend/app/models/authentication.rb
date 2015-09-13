class Authentication < ActiveRecord::Base
  belongs_to :user

  def self.find_or_new_from_omniauth(omniauth_hash)
    attrs = {
      provider: omniauth_hash[:provider],
      uid: omniauth_hash[:uid]
    }
    auth = find_by(attrs)
    auth || new(attrs)
  end
end

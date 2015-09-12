class AuthenticationToken < ActiveRecord::Base
  belongs_to :user

  def initialize(*args)
    super
    self.token ||= SecureRandom.urlsafe_base64
  end
end

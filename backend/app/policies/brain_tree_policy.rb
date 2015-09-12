class BrainTreePolicy < ApplicationPolicy
  def client_token?
    @user.present?
  end
end

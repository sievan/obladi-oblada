class UserPolicy < ApplicationPolicy

  def register_braintree_nonce?
    true
  end
end

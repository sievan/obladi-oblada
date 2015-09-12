class BrainTreeController < ApplicationController
  def client_token
    @token = Braintree::ClientToken.generate
  end

  def register_transaction

  end
end

class BrainTreeController < ApplicationController
  def client_token
    @token = Braintree::ClientToken.generate
  end

  def register_transaction
    result = Braintree::Customer.create(
      :first_name => "Charity",
      :last_name => "Smith",
      :payment_method_nonce => params[:nonce]
    )
    if result.success?
      puts result.customer.id
      puts result.customer.payment_methods[0].token
    else
      p result.errors
    end
  end

  def add_payment_method
    # TODO fix this!! Take care of nonce
    render nothing: true
  end
end

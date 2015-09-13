class BrainTreeController < ApplicationController
  def client_token
    @token = Braintree::ClientToken.generate
  end

  def add_payment_method
    result = Braintree::Customer.create(
      :first_name => "Charity",
      :last_name => "Smith",
      :payment_method_nonce => params[:nonce]
    )
    if result.success?
      current_user.update brain_tree_id: result.customer.id

    else
      p result.errors
    end
  end

  def pay_with_last_used_method
    result = Braintree::Transaction.sale(
      customer_id: "the_customer_id",
      amount: "10.00"
    )
    @success = result.success?
  end
end

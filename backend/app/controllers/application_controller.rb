class ApplicationController < ActionController::Base
  include Pundit
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  skip_before_action :verify_authenticity_token

  #after_action :verify_authorized, except: :index
  #after_action :verify_policy_scoped, only: :index

  private

  def current_user
    @current_user ||= AuthenticationToken.find_by(token: params[:token]).try :user
    @current_user ||= User.find_by(id: session[:user])
  end
end

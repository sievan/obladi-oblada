class SessionsController < ApplicationController
  skip_after_action :verify_authorized

  def new
    session[:token] = params[:token]
    session[:callback] = params[:callback]

    if current_user
      AuthenticationToken.create(user: current_user, token: params[:token])
      redirect_to session[:callback]
    else
      redirect_to "/auth/#{params[:provider] || 'paypal' }"
    end
  end

  def create
    session[:user] = omniauth_user.id
    AuthenticationToken.create token: session[:token], user: omniauth_user
    puts session[:token]
    redirect_to session[:callback]
  end

  def verify
    @token = AuthenticationToken.find_by token: params[:token]
    puts params[:token]
    render nothing: true, status: :not_found unless @token
  end

  def profile
    @token = AuthenticationToken.find_by token: params[:token]
    puts @token.id
  end

  private

  def omniauth_user
    @user ||= User.find_or_create_from_omniauth(omniauth_info)
  end

  def omniauth_info
    request.env["omniauth.auth"].with_indifferent_access
  end
end

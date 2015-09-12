class SessionsController < ApplicationController
  def new
    session[:callback] = params[:callback]
    if session[:user]
      redirect_to callback_url(User.find(session[:user]))
    else
      redirect_to "/auth/#{params[:provider] || 'paypal' }"
    end
  end

  def create
    session[:user] = omniauth_user.id
    redirect_to callback_url(omniauth_user)
  end

  private

  def callback_url(user)
    "#{session[:callback]}?token=#{user.auth_token.token}"
  end

  def omniauth_user
    @user ||= User.find_or_create_from_omniauth(omniauth_info)
  end

  def omniauth_info
    request.env["omniauth.auth"].with_indifferent_access
  end
end

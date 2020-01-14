class ApplicationController < ActionController::Base

  helper_method :current_user, :logged_in?

  def login!(user)
    session[:session_token] = user.reset_session_token!
    current_user = user
  end

  def logout!
   current_user.reset_session_token!
   @current_user = nil
   session[:session_token] = nil
  end

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !current_user.nil?
  end

  def require_logged_in
    unless current_user
      render json: { base: ['Forbidden'] }, status: 418
    end
  end

end

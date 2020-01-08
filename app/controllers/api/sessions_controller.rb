class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user.nil?
      render :json => ['Invalid username or password.'], status: 418
    else
      login!(@user)
      # redirect_to user_url(@user)
      render :json => @user
    end
  end

  def destroy
    if !current_user
      render :status => 404
    else 
      logout!
      render :json => {}
    end
  end
  
end

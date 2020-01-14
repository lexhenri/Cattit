class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user.nil?
      render :json => ['Invalid username or password.'], status: 418
    else
      login!(@user)
      render @user
      # redirect_to user_url(@us
      #make jbuilder for this
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

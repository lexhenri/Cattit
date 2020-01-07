class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :json => @user
    else
      flash.now[:errors] = @user.errors.full_messages
      render :json => @user.errors.full_messages
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    render :json => @user
  end

  private
  def user_params
    params.require(:user).permit(:email, :username, :password)
  end

end

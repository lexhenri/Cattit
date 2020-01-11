class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :json => @user 
      # HOLY SHIT MAKE SURE TO USE JBUILDER BEFORE PRODUCTION PUSH
    else
      render :json => @user.errors.full_messages, status: 418 
    end
  end

  # def show
  #   @user = User.find_by(id: params[:id])
  #   render :json => @user
  # end

  def show
    @user = User.find_by(id: params[:id])
    render :show
  end

  private
  def user_params
    params.require(:user).permit(:email, :username, :password)
  end

end

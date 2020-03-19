class Api::SubscribesController < ApplicationController

  before_action :find_subcattit
  before_action :already_subscribed?, only: [:destroy]


  def create
    if already_subscribed?
      render json: ["Already subscribed"], status: 418
    else
      @subcattit = Subcattit.find_by(name: params[:subcattit_id])
      @subscribe = @subcattit.subscribes.create(user_id: current_user.id, subcattit_id: @subcattit.id, subcattit_name: params[:subcattit_id])
      render :index
    end
  end

  def destroy
    if already_subscribed?
      @subcattit = Subcattit.find_by(name: params[:subcattit_id])
      @subscribe = Subscribe.find_by(user_id: current_user.id, subcattit_id: @subcattit.id)
      @subscribe.destroy
      render :index
    else
      render json: ["Not subscribed"], status: 418
    end
  end

  def show
    @subscribes = User.subscribes.find_by(user_id: params[:user_id])
    render :index
  end



private

  def find_subcattit
      @subcattit = Subcattit.find_by(name: params[:subcattit_id])
  end

  def already_subscribed?
    Subscribe.where(user_id: current_user.id, subcattit_id:
    @subcattit.id).exists?
  end


end

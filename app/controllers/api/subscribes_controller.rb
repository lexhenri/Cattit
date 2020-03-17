class Api::SubscribesController < ApplicationController

  before_action :find_subcattit
  before_action :already_subscribed?, only: [:destroy]


  def create
    if already_subscribed?
      render json: @subcattit
    else
      @subscribe = @subcattit.subscribes.create(user_id: current_user.id, subcattit_id: params[:id])
      render json: @subscribe
    end
  end

  def destroy
    if already_subscribed?
      @subscribe = Updoot.find_by(user_id: current_user.id, subcattit_id: params[:id])
      @subscribe.destroy
      render json: @subscribe
    else
      render json: @subscribe
    end
  end



private

  def find_subcattit
      @subcattit = Subcattit.find_by(name: params[:id])
  end

  def already_subscribed?
    Subscribe.where(user_id: current_user.id, subcattit_id:
    params[:id]).exists?
  end


end

class Api::UpdootsController < ApplicationController

  before_action :find_post
  before_action :already_downdoot?, only: [:destroy]
  helper_method :already_updoot?


  def create
    if already_updoot?
      render json: @post
    elsif already_downdoot?
      @downdoot = Downdoot.find_by(user_id: current_user.id, post_id: params[:post_id])
      @downdoot.destroy
      @post.updoots.create(user_id: current_user.id)
      render json: @post
    else
      @post.updoots.create(user_id: current_user.id)
      render json: @post
    end
  end

  def destroy
    if already_updoot?
      @updoot = Updoot.find_by(user_id: current_user.id, post_id: params[:post_id])
      @updoot.destroy
      render json: @post
    else
      render json: @post
    end
  end


private
  def like_params
    params.require(:updoot).permit(:user_id, :post_id, :id)
  end

  # def find_updoot
  #  @updoots = @post.updoots.find(params[:id])
  # end

  def find_post
    @post = Post.find(params[:post_id])
  end

  def already_downdoot?
    @downdoot = Downdoot.where(user_id: current_user.id, post_id:
    params[:post_id]).exists?
  end

  def already_updoot?
    Updoot.where(user_id: current_user.id, post_id:
    params[:post_id]).exists?
  end

end

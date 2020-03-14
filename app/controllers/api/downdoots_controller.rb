class Api::DowndootsController < ApplicationController

  before_action :find_post
  # before_action :find_downdoot
  helper_method :already_downdoot?


  def create
     if already_downdoot?
      render json: @post
    elsif already_updoot?
      @updoot = Updoot.find_by(user_id: current_user.id, post_id: params[:post_id])
      @updoot.destroy
      @post.downdoots.create(user_id: current_user.id)
    else
      @post.downdoots.create(user_id: current_user.id)
      render json: @post
    end
  end

  def destroy
    if already_downdoot?
      @downdoot = Downdoot.find_by(user_id: current_user.id, post_id: params[:post_id])
      @downdoot.destroy
      render json: @post
    else
      render json: @post
    end
  end


private
  # def find_downdoot
  #   @downdoot = @post.downdoot.find(params[:id])
  # end

  def find_post
    @post = Post.find(params[:post_id])
  end

  def already_downdoot?
    Downdoot.where(user_id: current_user.id, post_id:
    params[:post_id]).exists?
  end

   def already_updoot?
    Updoot.where(user_id: current_user.id, post_id:
    params[:post_id]).exists?
  end

end

class Api::PostsController < ApplicationController

  def index 
    @posts = Post.all
    render json: @posts
  end

  def show 
    @post = Post.find_by(subcattit_id: params[:subcattit_id])
    render json: @post
  end

  def create 
    @post = Post.new(post_params)
    if @post.save 
      render json: @post
    else
      render json: @post.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @post = Post.find_by(id: params[:id])
    @post.destroy
  end

  private 
  def post_params 
    params.require(:post).permit(:author_id, :title, :body, :subcattit_id)
  end
end

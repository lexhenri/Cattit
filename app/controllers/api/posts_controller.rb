class Api::PostsController < ApplicationController

  def all
    @allposts = Post.all
    render json: @allposts
  end

  def index 
    # debugger
    @posts = Subcattit.find_by(name: params[:subcattit_id]).posts.order(created_at: :desc)
    render :index
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
      render json: ['Title cannot be empty.'], status: 418
    end
  end

  def destroy
    @post = Post.find_by(id: params[:id])
    @post.destroy
  end

  private 
  def post_params 
    params.require(:post).permit(:author_id, :title, :body, :subcattit_name, :subcattit_id, :created_at)
  end
end

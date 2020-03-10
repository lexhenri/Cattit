class Api::FrontpagesController < ApplicationController

  def index 
    @frontpage = Frontpage.all
    render :index
  end

  # def show
  #   @post = Post.find_by(post_id: params[:post_id])
  #   render json: @post
  # end

  def frontpage_params 
    params.require(:frontpage).permit(:author_id, :title, :body, :subcattit_name, :subcattit_id, :created_at)
  end


end

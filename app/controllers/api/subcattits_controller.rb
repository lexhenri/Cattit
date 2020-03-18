class Api::SubcattitsController < ApplicationController

  # ID is the NAME of the subcattit!

  def index 
    @subcattits = Subcattit.all
    render json: @subcattits
  end

  def show
    @subcattit = Subcattit.find_by(name: params[:id])
    if !@subcattit
      render json: ["Subcattit must exist"], status: 404
    else
      render :show
    end
  end

  def create 
    @subcattit = Subcattit.new(subcattit_params)
    if @subcattit.save 
      render json: @subcattit
    else
      render json: @subcattit.errors.full_messages, status: 418
    end
  end
  
  private
  def subcattit_params
    params.require(:subcattit).permit(:name, :description, :icon, :banner, :id, :subscribes)
  end

end

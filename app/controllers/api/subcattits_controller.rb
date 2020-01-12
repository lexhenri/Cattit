class Api::SubcattitsController < ApplicationController

  def index 
    @subcattits = Subcattit.all
    render json: @subcattits
  end

  def show
    @subcattit = Subcattit.find_by(name: params[:id])
    if !@subcattit
      render json: ['Subcattit doesn`t exist!'], status: 404
    else
      render json: @subcattit
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
    params.require(:subcattit).permit(:name, :description)
  end

end

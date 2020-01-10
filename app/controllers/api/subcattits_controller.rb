class Api::SubcattitsController < ApplicationController

  def show
    @subcattit = Subcattit.find_by(name: params[:id])
    render json: @subcattit
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

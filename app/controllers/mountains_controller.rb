class MountainsController < ApplicationController
  
    def index
      @mountains = Mountain.all 
      render json: @mountains
    end 
  end
  
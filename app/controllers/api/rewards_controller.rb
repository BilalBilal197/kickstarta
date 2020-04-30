
class Api::RewardsController < ApplicationController 

def create
    @reward = Reward.create!(reward_params)
    render :show
 
end

def index
    rewards = Rewards.all
    render :index
  
end


end

def reward_params
    params.require(:reward).permit(
        :title, :category, 
        :description, :photo, 
        :project_id, :funded
    )


end
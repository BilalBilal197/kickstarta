class Api::ProjectController < ApplicationController 

def create
    @project = Project.create!(project_params)
    render :show
 
end

def index
    projects = Project.all
    render :index
  
end

def show
    @project = Project.find(params[:id])

end

end

def project_params
    params.require(:project).permit(
        :title, :category, 
        :description, :photo, 
        :days_remaining, :funded
    )
end
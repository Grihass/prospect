class ProjectsController < ApplicationController
  def index
    @projects = Project.all
  end

  def update
  end

  def create
  end
end

private
  def project_params
    params.require(:project).permit(:title)
  end

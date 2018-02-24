class TodosController < ApplicationController
  def index
  end

  def update
  end

  def create
    project = Project.find(params[:project_id])
    t = Todo.create(text:params[:new_todo], isCompleted:false)

    project.todos<<t
    
    redirect_to root_path
  end
 
  private
    def todo_params
      params.require(:todos).permit(:text)
    end
end



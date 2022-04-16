class Api::V1::TasksController < ApplicationController
  before_action :set_task, only: %i[show new destroy]

  def index
    @tasks = Task.all
    render json: @tasks
  end

  def show
    render json: @task
  end

  def new
    render json: @task
  end

  def create
    @task = Task.new(task_params)
    @task.save
    render json: @task
  end

  def update
    @task.update(task_params)
    render json: @task
  end

  def destroy
    @task.destroy!
    render json: @task
  end

  private    
    def task_params
      prams.resuire(:task).permit(:title, :body)
    end

    def set_task
      @task = Task.find(params[:id])
    end
end

class ExercisesController < ApplicationController
    skip_before_action :authorize, only: :index

    def index
        render json: Exercise.order(:trainer_id)
    end

    def show
        exercise = Exercise.find_by(id: params[:id])
        render json: exercise
    end

    def create
        exercise = Exercise.create!(exercise_params)
        render json: Exercise.order(:trainer_id), status: :created
    end

    def update
        exercise = Exercise.find_by(id: params[:id])
        exercise.update!(exercise_params)
        render json: Exercise.all.order(:id), status: :accepted
    end

    def destroy
        exercise = Exercise.find_by(id: params[:id])
        exercise.destroy
        render json: Exercise.all
    end

    private

    def exercise_params
        params.permit(:name, :description, :difficulty, :video, :trainer_id)
    end
    
end

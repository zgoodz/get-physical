class ExercisesController < ApplicationController

    def index
        render json: Exercise.all
    end

    def show
        exercise = Exercise.find_by(id: params[:id])
        render json: exercise
    end

    def create
        exercise = Exercise.create!(exercise_params)
        render json: exercise, status: :created
    end

    def update
        exercise = Exercise.find_by(id: params[:id])
        exercise.update!(exercise_params)
        render json: exercise, status: :accepted
    end

    def destroy
        exercise = Exercise.find_by(id: params[:id])
        exercise.destroy
        head :no_content
    end

    private

    def exercise_params
        params.permit(:name, :description, :difficulty, :video, :trainer_id)
    end
    
end

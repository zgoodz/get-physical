class ClientExerciseJoinsController < ApplicationController

    def index
        routines = ClientExerciseJoin.where(client_id: params[:client_id])
        render json: routines
    end

    def create
        exercise = ClientExerciseJoin.create!(routine_params)
        render json: Client.find_by(id: params[:client_id]), status: :created
    end

    def destroy
        exercise = ClientExerciseJoin.find_by(routine_params)
        exercise.destroy
        render json: Client.find_by(id: params[:client_id])
    end

    private

    def routine_params
        params.permit(:client_id, :exercise_id)
    end

end

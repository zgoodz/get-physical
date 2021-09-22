class TrainersController < ApplicationController

    def index
        render json: Trainer.all
    end

    def create
        trainer = Trainer.create!(trainer_params)
        render json: trainer, status: :created
    end

    def update
        trainer = Trainer.find_by(id: params[:id])
        trainer.update!(trainer_params)
        render json: trainer, status: :accepted
    end

    private

    def trainer_params
        params.permit(:name, :location, :bio, :profile_img, :taking_new_clients, :password, :password_confirmation)
    end
    
end

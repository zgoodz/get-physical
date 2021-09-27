class TrainersController < ApplicationController
    skip_before_action :authorize, only: :create

    def index
        render json: Trainer.all
    end

    def show
        render json: @current_user, status: :ok
    end

    def create
        trainer = Trainer.create!(trainer_params)
        session[:trainer_id] = trainer.id
        render json: trainer, status: :created
    end

    def update
        trainer = Trainer.find_by(id: params[:id])
        trainer.update!(trainer_params)
        render json: trainer, status: :accepted
    end

    private

    def trainer_params
        params.permit(:name, :email, :user_type, :location, :bio, :profile_img, :taking_new_clients, :password, :password_confirmation)
    end

end

class ClientsController < ApplicationController
    skip_before_action :authorize, only: :create

    def index
        render json: Client.all
    end

    def show
        render json: @current_user, status: :ok
    end

    def create
        client = Client.create!(client_params)
        session[:client_id] = client.id
        render json: client, status: :created
    end

    def update
        client = Client.find_by(id: params[:id])
        client.update!(client_params)
        render json: client, status: :accepted
    end

    private

    def client_params
        params.permit(:name, :email, :user_type, :dob, :bio, :profile_img, :password, :password_confirmation)
    end
end

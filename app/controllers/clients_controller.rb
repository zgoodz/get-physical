class ClientsController < ApplicationController

    def index
        render json: Client.all
    end

    def create
        client = Client.create!(client_params)
        render json: client, status: :created
    end

    def update
        client = Client.find_by(id: params[:id])
        client.update!(client_params)
        render json: client, status: :accepted
    end

    private

    def client_params
        params.permit(:name, :dob, :bio, :profile_img, :password, :password_confirmation)
    end
end

class SessionsController < ApplicationController
    skip_before_action :authorize, only: [:create_member, :create_trainer]

     def create_member
        client = Client.find_by(email: params[:email])
        if client&.authenticate(params[:password])
            session[:client_id] = client.id
            render json: client
        else
            render json: { error: "Invalid email/password" }, status: :unauthorized
        end
    end

    def destroy_member
        session.delete :client_id
        head :no_content
    end

     def create_trainer
        trainer = Trainer.find_by(email: params[:email])
        if trainer&.authenticate(params[:password])
            session[:trainer_id] = trainer.id
            render json: trainer
        else
            render json: { error: "Invalid email/password" }, status: :unauthorized
        end
    end

    def destroy_trainer
        session.delete :trainer_id
        head :no_content
    end
end

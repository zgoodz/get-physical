class ApplicationController < ActionController::API
    include ActionController::Cookies

    wrap_parameters format: []

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    before_action :authorize

    def hello_world
        session[:count] = (session[:count] || 0) + 1
        render json: { count: session[:count] }
    end

    private

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found_response(exception)
        render json: { error: "#{exception.model} not found" }, status: :not_found
    end

    def authorize
        if session[:client_id] 
            @current_user = Client.find_by(id: session[:client_id])
            render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
        elsif session[:trainer_id] 
            @current_user = Trainer.find_by(id: session[:trainer_id])
            render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
        end
    end

end

class AppointmentsController < ApplicationController

    def index
        render json: Appointment.all
    end

    def create
        appointment = Appointment.create!(appointment_params)
        render json: appointment, status: :created
    end

    def update
        appointment = Appointment.find_by(id: params[:id])
        appointment.update!(appointment_params)
        render json: appointment, status: :accepted
    end

    def destroy
        appointment = Appointment.find_by(id: params[:id])
        appointment.destroy
        head :no_content
    end

    private

    def appointment_params
        params.permit(:date, :location, :level, :duration, :capacity, :trainer_id)
    end
    
end

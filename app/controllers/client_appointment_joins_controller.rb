class ClientAppointmentJoinsController < ApplicationController

    def index
        reservations = ClientAppointmentJoin.where(client_id: params[:client_id])
        render json: reservations
    end

    def create
        reservations = ClientAppointmentJoin.where(id: params[:appointment_id])
        reservation = ClientAppointmentJoin.find_by(id: params[:client_id])
        appointment = Appointment.find_by(id: params[:appointment_id])
        client = Client.find_by(id: params[:client_id])

        if reservations.length < appointment.capacity && !reservation
            reservation = ClientAppointmentJoin.create!(reservation_params)
            render json: Appointment.all, status: :created
        elsif reservation
            render json: { error: "Already reserved" }, status: :unprocessable_entity
        else
            render json: { error: "Class is full" }, status: :unprocessable_entity
        end
    end

    def destroy
        reservation = ClientAppointmentJoin.find_by(reservation_params)
        reservation.destroy
        head :no_content
    end

    private

    def reservation_params
        params.permit(:client_id, :appointment_id)
    end

end
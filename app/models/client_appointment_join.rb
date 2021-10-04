class ClientAppointmentJoin < ApplicationRecord
  belongs_to :client
  belongs_to :appointment
end

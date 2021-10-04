class ClientAppointmentJoinSerializer < ActiveModel::Serializer
  attributes :id
  has_one :client
  has_one :appointment
end

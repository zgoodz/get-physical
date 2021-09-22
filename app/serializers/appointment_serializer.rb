class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :date, :location, :level, :duration, :capacity
  has_one :trainer
end

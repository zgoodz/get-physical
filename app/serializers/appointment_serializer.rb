class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :date, :location, :level, :duration, :capacity, :price
  has_one :trainer
  has_many :clients
end

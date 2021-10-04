class Appointment < ApplicationRecord
  belongs_to :trainer
  has_many :client_appointment_joins, dependent: :destroy
  has_many :clients, through: :client_appointment_joins

  # validates :date, presence: true
  validates :location, presence: true
  validates :level, inclusion: { in: 1..5, message: "Must be between 1-5" }
end

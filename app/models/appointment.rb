class Appointment < ApplicationRecord
  belongs_to :trainer

  # validates :date, presence: true
  validates :location, presence: true
  validates :level, inclusion: { in: 1..5, message: "Must be between 1-5" }
end

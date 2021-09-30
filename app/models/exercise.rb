class Exercise < ApplicationRecord
  belongs_to :trainer
  has_many :client_exercise_joins, dependent: :destroy
  has_many :clients, through: :client_exercise_joins  

  validates :name, presence: true
  validates :description, presence: true
  validates :difficulty, inclusion: { in: 1..5 }

end

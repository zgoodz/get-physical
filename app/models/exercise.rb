class Exercise < ApplicationRecord
  belongs_to :trainer

  validates :name, presence: true
  validates :description, presence: true
  validates :difficulty, inclusion: { in: 1..5 }

end

class ReviewRating < ApplicationRecord
  belongs_to :client
  belongs_to :trainer

  validates :rating, inclusion: { in: 1..5, message: "Must be between 1-5" }
end

class Trainer < ApplicationRecord
    has_secure_password
    has_many :review_ratings, dependent: :destroy
    has_many :clients, through: :reviews
    has_many :exercises
    has_many :appointments

    validates :name, presence: true
    validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }, uniqueness: true
    validates :user_type, presence: true

    def average_rating
        ratings = self.review_ratings.map{ |obj| obj.rating }
        average = ratings.sum() / ratings.length.to_f
        return average.round(1)
    end

end

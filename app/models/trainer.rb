class Trainer < ApplicationRecord
    has_secure_password
    has_many :review_ratings, dependent: :destroy
    has_many :clients, through: :reviews
    has_many :exercises
    has_many :appointments

    validates :name, presence: true
    validates :location, presence: true
    validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }, uniqueness: true
    validates :user_type, presence: true
end

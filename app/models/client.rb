class Client < ApplicationRecord
    has_secure_password
    has_many :review_ratings, dependent: :destroy
    has_many :trainers, through: :reviews

    validates :name, presence: true
    validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }, uniqueness: true
    validates :user_type, presence: true
end

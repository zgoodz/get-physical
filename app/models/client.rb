class Client < ApplicationRecord
    has_secure_password
    has_many :review_ratings, dependent: :destroy
    has_many :trainers, through: :reviews
    has_many :client_exercise_joins, dependent: :destroy
    has_many :exercises, through: :client_exercise_joins
    has_many :client_appointment_joins, dependent: :destroy
    has_many :appointments, through: :client_appointment_joins

    validates :name, presence: true
    validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }, uniqueness: true
    validates :user_type, presence: true
end

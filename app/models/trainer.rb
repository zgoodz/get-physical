class Trainer < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :clients, through: :reviews
    has_many :exercises
    has_many :appointments
end

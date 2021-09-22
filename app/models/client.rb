class Client < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :trainers, through: :reviews
end

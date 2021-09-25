class TrainerSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :location, :bio, :profile_img, :taking_new_clients, :password_digest, :user_type

  has_many :review_ratings
end

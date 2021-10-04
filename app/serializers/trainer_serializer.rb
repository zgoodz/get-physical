class TrainerSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :location, :bio, :profile_img, :taking_new_clients, :password_digest, :user_type, :average_rating

  has_many :review_ratings
  has_many :exercises
  has_many :appointments

  def average_rating
    self.object.average_rating
  end
end

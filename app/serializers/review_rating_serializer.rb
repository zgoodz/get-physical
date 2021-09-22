class ReviewRatingSerializer < ActiveModel::Serializer
  attributes :id, :review, :rating
  has_one :client
  has_one :trainer
end

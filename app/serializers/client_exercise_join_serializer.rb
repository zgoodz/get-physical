class ClientExerciseJoinSerializer < ActiveModel::Serializer
  attributes :id
  has_one :client
  has_one :exercise
end

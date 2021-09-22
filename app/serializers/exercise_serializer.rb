class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :difficulty, :video
  has_one :trainer
end

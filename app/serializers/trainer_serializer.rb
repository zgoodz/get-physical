class TrainerSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :bio, :profile_img, :taking_new_clients, :password_digest
end

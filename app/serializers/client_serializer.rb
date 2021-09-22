class ClientSerializer < ActiveModel::Serializer
  attributes :id, :name, :dob, :bio, :profile_img, :password_digest
end

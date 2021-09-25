class ClientSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :bio, :profile_img, :password_digest, :user_type
end

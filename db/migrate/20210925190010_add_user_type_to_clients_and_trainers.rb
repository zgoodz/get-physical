class AddUserTypeToClientsAndTrainers < ActiveRecord::Migration[6.1]
  def change
    add_column :trainers, :user_type, :string
    add_column :clients, :user_type, :string
  end
end

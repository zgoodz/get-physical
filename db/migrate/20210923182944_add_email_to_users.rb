class AddEmailToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :clients, :email, :string
    add_column :trainers, :email, :string
  end
end

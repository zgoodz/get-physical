class RemoveDobFromClient < ActiveRecord::Migration[6.1]
  def change
    remove_column :clients, :dob
  end
end

class CreateClients < ActiveRecord::Migration[6.1]
  def change
    create_table :clients do |t|
      t.string :name
      t.datetime :dob
      t.text :bio
      t.string :profile_img
      t.string :password_digest

      t.timestamps
    end
  end
end

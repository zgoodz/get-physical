class CreateTrainers < ActiveRecord::Migration[6.1]
  def change
    create_table :trainers do |t|
      t.string :name
      t.string :location
      t.text :bio
      t.string :profile_img
      t.boolean :taking_new_clients
      t.string :password_digest

      t.timestamps
    end
  end
end

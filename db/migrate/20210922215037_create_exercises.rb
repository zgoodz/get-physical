class CreateExercises < ActiveRecord::Migration[6.1]
  def change
    create_table :exercises do |t|
      t.string :name
      t.text :description
      t.integer :difficulty
      t.string :video
      t.belongs_to :trainer, null: false, foreign_key: true

      t.timestamps
    end
  end
end

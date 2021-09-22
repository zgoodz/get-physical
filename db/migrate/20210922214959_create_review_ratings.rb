class CreateReviewRatings < ActiveRecord::Migration[6.1]
  def change
    create_table :review_ratings do |t|
      t.text :review
      t.integer :rating
      t.belongs_to :client, null: false, foreign_key: true
      t.belongs_to :trainer, null: false, foreign_key: true

      t.timestamps
    end
  end
end

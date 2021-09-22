class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.datetime :date
      t.string :location
      t.integer :level
      t.integer :duration
      t.integer :capacity
      t.belongs_to :trainer, null: false, foreign_key: true

      t.timestamps
    end
  end
end

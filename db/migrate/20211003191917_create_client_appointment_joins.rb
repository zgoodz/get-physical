class CreateClientAppointmentJoins < ActiveRecord::Migration[6.1]
  def change
    create_table :client_appointment_joins do |t|
      t.belongs_to :client, null: false, foreign_key: true
      t.belongs_to :appointment, null: false, foreign_key: true

      t.timestamps
    end
  end
end

class AddPriceToAppointments < ActiveRecord::Migration[6.1]
  def change
    add_column :appointments, :price, :integer
  end
end

class ChangeColumnFromDatetimeToDate < ActiveRecord::Migration[6.1]
  def change
    change_column :clients, :dob, :date
  end
end

class CreateRentals < ActiveRecord::Migration
  def change
    create_table :rentals do |t|
      t.references :rentable, index: true, foreign_key: true
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end

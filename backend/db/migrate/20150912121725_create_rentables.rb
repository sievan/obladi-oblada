class CreateRentables < ActiveRecord::Migration
  def change
    create_table :rentables do |t|
      t.string :description
      t.decimal :price
      t.references :owner, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end

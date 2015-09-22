class ChangeRentable < ActiveRecord::Migration
  def change
    change_table :rentables do |t|
      t.remove :owner_id
      t.references :user
    end
  end
end

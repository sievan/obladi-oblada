class AddApprovedByOwnerToRentals < ActiveRecord::Migration
  def change
    add_column :rentals, :approved_by_owner, :boolean
  end
end

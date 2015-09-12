class AddImageToRentable < ActiveRecord::Migration
  def change
    add_column :rentables, :image, :string
  end
end

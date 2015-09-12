class AddTitleToRentables < ActiveRecord::Migration
  def change
    add_column :rentables, :title, :string
  end
end

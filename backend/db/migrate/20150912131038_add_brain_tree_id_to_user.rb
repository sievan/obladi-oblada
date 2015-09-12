class AddBrainTreeIdToUser < ActiveRecord::Migration
  def change
    add_column :users, :brain_tree_id, :string
  end
end

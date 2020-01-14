class DropSubcatId < ActiveRecord::Migration[5.2]
  def change
    remove_column :posts, :subcattit_id
  end
end

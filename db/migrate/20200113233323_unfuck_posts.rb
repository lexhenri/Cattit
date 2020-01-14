class UnfuckPosts < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :subcattit_name, :string, null: false
  end
end

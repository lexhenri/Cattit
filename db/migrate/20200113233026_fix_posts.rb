class FixPosts < ActiveRecord::Migration[5.2]
  def change
    remove_column :posts, :subcattit_name
  end
end

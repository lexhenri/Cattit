class AddPostId < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :subcattit_id, :integer
  end
end

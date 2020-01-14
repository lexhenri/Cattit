class UnfuckPostsMore < ActiveRecord::Migration[5.2]
  def change
    change_column :posts, :subcattit_name, :string, null: true
  end
end

class AddCommentstoPost < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :num_comments, :integer
  end
end

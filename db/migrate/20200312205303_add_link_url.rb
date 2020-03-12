class AddLinkUrl < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :linkUrl, :string
  end
end

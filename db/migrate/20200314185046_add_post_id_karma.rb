class AddPostIdKarma < ActiveRecord::Migration[5.2]
  def change
    add_column :karmas, :post_id, :integer, null: false
  end
end

class ChangeColumnType < ActiveRecord::Migration[5.2]
  def change
    change_column :posts, :subcattit_id, :string
    rename_column :posts, :subcattit_id, :subcattit_name
  end
end

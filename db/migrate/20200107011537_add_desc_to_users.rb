class AddDescToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :description, :text, null: true
  end
end

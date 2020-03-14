class AddKarmaCount < ActiveRecord::Migration[5.2]
  def change
    add_column :karmas, :count, :integer, :default => 0
  end
end

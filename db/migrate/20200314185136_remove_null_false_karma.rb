class RemoveNullFalseKarma < ActiveRecord::Migration[5.2]
  def change
    change_column :karmas, :post_id, :integer
  end
end

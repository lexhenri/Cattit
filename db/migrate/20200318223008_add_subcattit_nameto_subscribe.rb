class AddSubcattitNametoSubscribe < ActiveRecord::Migration[5.2]
  def change
    add_column :subscribes, :subcattit_name, :string
  end
end

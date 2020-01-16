class EditNumMembers < ActiveRecord::Migration[5.2]
  def change
    change_column :subcattits, :num_members, :string
    change_column :subcattits, :num_online, :string
  end
end

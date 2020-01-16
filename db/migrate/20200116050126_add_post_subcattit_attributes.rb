class AddPostSubcattitAttributes < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :upvotes, :integer, default: 0
    add_column :subcattits, :num_members, :integer, default: 0
    add_column :subcattits, :num_online, :integer, default: 0
    add_column :subcattits, :member_desc, :string, default: "members"
    add_column :subcattits, :online_desc, :string, default: "online"
  end
end

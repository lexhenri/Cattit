class CreateSubcattits < ActiveRecord::Migration[5.2]
  def change
    create_table :subcattits do |t|
      t.string :name, null: false
      t.text :description 
      t.integer :moderator_ids, array: true, default: []
      t.integer :subscriber_ids, array: true, default: []
      t.integer :num_subscribers, default: 0
      t.timestamps
    end
    add_index :subcattits, :name, unique: true
  end
end

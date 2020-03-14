class CreateUpdoots < ActiveRecord::Migration[5.2]
  def change
    create_table :updoots do |t|
      t.integer :user_id
      t.references :updootable, polymorphic: true, index: true
      t.timestamps
    end

      add_index :updoots, [:user_id, :updootable_type, :updootable_id], unique: true
  end
end

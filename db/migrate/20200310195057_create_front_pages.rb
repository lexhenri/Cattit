class CreateFrontPages < ActiveRecord::Migration[5.2]
  def change
    create_table :front_pages do |t|
      t.integer :post_id, null: false
      t.integer :subcattit_id
      t.timestamps
    end
  end
end

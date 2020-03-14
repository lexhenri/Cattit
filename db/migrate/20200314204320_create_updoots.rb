class CreateUpdoots < ActiveRecord::Migration[5.2]
  def change
    drop_table :updoots
    
    create_table :updoots do |t|
      t.references :post, foreign_key: true
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end

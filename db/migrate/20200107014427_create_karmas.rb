class CreateKarmas < ActiveRecord::Migration[5.2]
  def change
    create_table :karmas do |t|

      t.timestamps
    end
  end
end

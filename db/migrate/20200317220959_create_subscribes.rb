class CreateSubscribes < ActiveRecord::Migration[5.2]
  def change
    create_table :subscribes do |t|
      t.references :subcattit, foreign_key: true
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end

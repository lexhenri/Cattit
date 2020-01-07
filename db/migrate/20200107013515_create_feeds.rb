class CreateFeeds < ActiveRecord::Migration[5.2]
  def change
    create_table :feeds do |t|
      t.integer :user_id, null: false
      t.references :subbed_users
      t.references :subbed_cattits
      t.timestamps
    end
    add_index :feeds, :user_id, unique: true
  end
end

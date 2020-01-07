class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :email
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.integer :subbed_cattits, array: true, default: []
      t.integer :subbed_users, array: true, default: []
      t.timestamps
    end
  end
end

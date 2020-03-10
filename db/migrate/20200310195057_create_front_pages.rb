class CreateFrontPages < ActiveRecord::Migration[5.2]
  def change
    create_table :front_pages do |t|

      t.timestamps
    end
  end
end

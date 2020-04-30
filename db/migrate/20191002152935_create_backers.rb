class CreateBackers < ActiveRecord::Migration[5.2]
  def change
    create_table :backers do |t|
      t.integer :project_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :backers, :project_id, unique: true
    add_index :backers, :user_id, unique: true
  end
end

class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.string :category, null: false
      t.string :description, null: false
      t.integer :days_remaining, null: false
      t.integer :funded, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :projects, :title, unique: true
    add_index :projects, :user_id, unique: true 
  end
end

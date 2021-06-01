class CreateTrainers < ActiveRecord::Migration[5.2]
  def change
    create_table :trainers do |t|
      t.string :name
      t.string :username
      t.string :password
      t.integer :wins
      t.integer :losses
      t.string :bio
      t.string :sprite
    end
  end
end

class CreateSprites < ActiveRecord::Migration[5.2]
  def change
    create_table :sprites do |t|
      t.string :name
      t.string :image
    end
  end
end

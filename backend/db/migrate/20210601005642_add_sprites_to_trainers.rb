class AddSpritesToTrainers < ActiveRecord::Migration[5.2]
  def change
    add_column :trainers, :sprite, :string
  end
end

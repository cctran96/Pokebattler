class CreatePokemons < ActiveRecord::Migration[5.2]
  def change
    create_table :pokemons do |t|
      t.string :name
      t.string :types
      t.integer :hp
      t.integer :atk
      t.integer :def
      t.integer :sp_a
      t.integer :sp_d
      t.integer :spd
      t.string :moves
    end
  end
end

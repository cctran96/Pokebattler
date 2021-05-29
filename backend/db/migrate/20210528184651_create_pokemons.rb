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
      t.string :move1
      t.string :move2
      t.string :move3
      t.string :move4
    end
  end
end

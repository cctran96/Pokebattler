class CreateMoves < ActiveRecord::Migration[5.2]
  def change
    create_table :moves do |t|
      t.string :name
      t.integer :accuracy
      t.integer :power
      t.integer :pp
      t.integer :priority
      t.string :move_class
      t.string :move_type
    end
  end
end

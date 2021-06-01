# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_06_01_005642) do

  create_table "moves", force: :cascade do |t|
    t.string "name"
    t.integer "accuracy"
    t.integer "power"
    t.integer "pp"
    t.integer "priority"
    t.string "move_class"
    t.string "move_type"
  end

  create_table "pokemons", force: :cascade do |t|
    t.string "name"
    t.string "types"
    t.integer "hp"
    t.integer "atk"
    t.integer "def"
    t.integer "sp_a"
    t.integer "sp_d"
    t.integer "spd"
    t.string "moves"
  end

  create_table "teams", force: :cascade do |t|
    t.string "name"
    t.integer "trainer_id"
    t.string "team"
  end

  create_table "trainers", force: :cascade do |t|
    t.string "name"
    t.string "username"
    t.string "password"
    t.integer "wins"
    t.integer "losses"
    t.string "bio"
    t.string "sprite"
  end

end

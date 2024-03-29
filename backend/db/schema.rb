# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20150913104558) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "authentication_tokens", force: :cascade do |t|
    t.string   "token"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "authentication_tokens", ["user_id"], name: "index_authentication_tokens_on_user_id", using: :btree

  create_table "authentications", force: :cascade do |t|
    t.string   "provider"
    t.string   "uid"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "authentications", ["user_id"], name: "index_authentications_on_user_id", using: :btree

  create_table "customers", force: :cascade do |t|
    t.integer  "rentable_id"
    t.integer  "user_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "customers", ["rentable_id"], name: "index_customers_on_rentable_id", using: :btree
  add_index "customers", ["user_id"], name: "index_customers_on_user_id", using: :btree

  create_table "owners", force: :cascade do |t|
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "owners", ["user_id"], name: "index_owners_on_user_id", using: :btree

  create_table "rentables", force: :cascade do |t|
    t.string   "description"
    t.decimal  "price"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.string   "title"
    t.string   "image"
    t.integer  "user_id"
  end

  create_table "rentals", force: :cascade do |t|
    t.integer  "rentable_id"
    t.integer  "user_id"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.boolean  "approved_by_owner"
  end

  add_index "rentals", ["rentable_id"], name: "index_rentals_on_rentable_id", using: :btree
  add_index "rentals", ["user_id"], name: "index_rentals_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.string   "brain_tree_id"
    t.string   "image_url"
  end

  add_foreign_key "authentication_tokens", "users"
  add_foreign_key "authentications", "users"
  add_foreign_key "customers", "rentables"
  add_foreign_key "customers", "users"
  add_foreign_key "owners", "users"
  add_foreign_key "rentals", "rentables"
  add_foreign_key "rentals", "users"
end

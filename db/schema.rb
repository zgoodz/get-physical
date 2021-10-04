# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_10_03_191917) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "appointments", force: :cascade do |t|
    t.datetime "date"
    t.string "location"
    t.integer "level"
    t.integer "duration"
    t.integer "capacity"
    t.bigint "trainer_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "price"
    t.index ["trainer_id"], name: "index_appointments_on_trainer_id"
  end

  create_table "client_appointment_joins", force: :cascade do |t|
    t.bigint "client_id", null: false
    t.bigint "appointment_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["appointment_id"], name: "index_client_appointment_joins_on_appointment_id"
    t.index ["client_id"], name: "index_client_appointment_joins_on_client_id"
  end

  create_table "client_exercise_joins", force: :cascade do |t|
    t.bigint "client_id", null: false
    t.bigint "exercise_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["client_id"], name: "index_client_exercise_joins_on_client_id"
    t.index ["exercise_id"], name: "index_client_exercise_joins_on_exercise_id"
  end

  create_table "clients", force: :cascade do |t|
    t.string "name"
    t.text "bio"
    t.string "profile_img"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "email"
    t.string "user_type"
  end

  create_table "exercises", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.integer "difficulty"
    t.string "video"
    t.bigint "trainer_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["trainer_id"], name: "index_exercises_on_trainer_id"
  end

  create_table "review_ratings", force: :cascade do |t|
    t.text "review"
    t.integer "rating"
    t.bigint "client_id", null: false
    t.bigint "trainer_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["client_id"], name: "index_review_ratings_on_client_id"
    t.index ["trainer_id"], name: "index_review_ratings_on_trainer_id"
  end

  create_table "trainers", force: :cascade do |t|
    t.string "name"
    t.string "location"
    t.text "bio"
    t.string "profile_img"
    t.boolean "taking_new_clients"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "email"
    t.string "user_type"
  end

  add_foreign_key "appointments", "trainers"
  add_foreign_key "client_appointment_joins", "appointments"
  add_foreign_key "client_appointment_joins", "clients"
  add_foreign_key "client_exercise_joins", "clients"
  add_foreign_key "client_exercise_joins", "exercises"
  add_foreign_key "exercises", "trainers"
  add_foreign_key "review_ratings", "clients"
  add_foreign_key "review_ratings", "trainers"
end

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

ActiveRecord::Schema.define(version: 2020_03_18_223008) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "comments", force: :cascade do |t|
    t.integer "parent_id"
    t.integer "author_id", null: false
    t.integer "post_id", null: false
    t.text "body", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["parent_id"], name: "index_comments_on_parent_id"
  end

  create_table "downdoots", force: :cascade do |t|
    t.bigint "post_id"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["post_id"], name: "index_downdoots_on_post_id"
    t.index ["user_id"], name: "index_downdoots_on_user_id"
  end

  create_table "feeds", force: :cascade do |t|
    t.integer "user_id", null: false
    t.bigint "subbed_users_id"
    t.bigint "subbed_cattits_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["subbed_cattits_id"], name: "index_feeds_on_subbed_cattits_id"
    t.index ["subbed_users_id"], name: "index_feeds_on_subbed_users_id"
    t.index ["user_id"], name: "index_feeds_on_user_id", unique: true
  end

  create_table "front_pages", force: :cascade do |t|
    t.integer "post_id", null: false
    t.integer "subcattit_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "karmas", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "count", default: 0
    t.integer "post_id", null: false
  end

  create_table "posts", force: :cascade do |t|
    t.integer "author_id", null: false
    t.string "title", null: false
    t.text "body"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "subcattit_id"
    t.integer "num_comments"
    t.integer "upvotes", default: 0
    t.string "post_type"
    t.string "linkUrl"
    t.index ["author_id"], name: "index_posts_on_author_id"
  end

  create_table "subcattits", force: :cascade do |t|
    t.string "name", null: false
    t.text "description"
    t.integer "moderator_ids", default: [], array: true
    t.integer "subscriber_ids", default: [], array: true
    t.integer "num_subscribers", default: 0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "num_members", default: "0"
    t.string "num_online", default: "0"
    t.string "member_desc", default: "members"
    t.string "online_desc", default: "online"
    t.index ["name"], name: "index_subcattits_on_name", unique: true
  end

  create_table "subscribes", force: :cascade do |t|
    t.bigint "subcattit_id"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "subcattit_name"
    t.index ["subcattit_id"], name: "index_subscribes_on_subcattit_id"
    t.index ["user_id"], name: "index_subscribes_on_user_id"
  end

  create_table "updoots", force: :cascade do |t|
    t.bigint "post_id"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["post_id"], name: "index_updoots_on_post_id"
    t.index ["user_id"], name: "index_updoots_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email"
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.integer "subbed_cattits", default: [], array: true
    t.integer "subbed_users", default: [], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "description"
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "downdoots", "posts"
  add_foreign_key "downdoots", "users"
  add_foreign_key "subscribes", "subcattits"
  add_foreign_key "subscribes", "users"
  add_foreign_key "updoots", "posts"
  add_foreign_key "updoots", "users"
end

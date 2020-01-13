# == Schema Information
#
# Table name: posts
#
#  id             :bigint           not null, primary key
#  author_id      :integer          not null
#  subcattit_name :string           not null
#  title          :string           not null
#  body           :text
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Post < ApplicationRecord
  validates :title, :body, presence: true;

  belongs_to :user,
  foreign_key: :author_id,
  class_name: :User

  belongs_to :subcattit,
  foreign_key: :subcattit_name,
  class_name: :Subcattit


  
end

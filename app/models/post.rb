# == Schema Information
#
# Table name: posts
#
#  id           :bigint           not null, primary key
#  author_id    :integer          not null
#  title        :string           not null
#  body         :text
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  subcattit_id :integer
#  num_comments :integer
#  upvotes      :integer          default(0)
#

class Post < ApplicationRecord
  validates :title, :subcattit_id, :author_id, presence: true;

  belongs_to :user,
  foreign_key: :author_id,
  class_name: :User

  belongs_to :subcattit,
  foreign_key: :subcattit_id,
  class_name: :Subcattit

  belongs_to :front_page,
  foreign_key: :post_id,
  class_name: :FrontPage

  has_many :comments,
  foreign_key: :post_id,
  class_name: :Comments


  
end

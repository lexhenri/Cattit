# == Schema Information
#
# Table name: posts
#
#  id           :bigint           not null, primary key
#  author_id    :integer          not null
#  subcattit_id :integer          not null
#  title        :string           not null
#  body         :text
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Post < ApplicationRecord
  validates :title, :body, :author_id, :subcattit_id, presence: true;

  belongs_to :user,
  foreign_key: :author_id,
  class_name: :User
  
end

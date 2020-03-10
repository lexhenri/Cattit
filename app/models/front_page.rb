# == Schema Information
#
# Table name: front_pages
#
#  id           :bigint           not null, primary key
#  post_id      :integer          not null
#  subcattit_id :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class FrontPage < ApplicationRecord

  has_many :posts,
  foreign_key: :post_id,
  class_name: :Post
  
end

# == Schema Information
#
# Table name: subcattits
#
#  id              :bigint           not null, primary key
#  name            :string           not null
#  description     :text
#  moderator_ids   :integer          default([]), is an Array
#  subscriber_ids  :integer          default([]), is an Array
#  num_subscribers :integer          default(0)
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Subcattit < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  # self.primary_key = "name"

  has_many :posts,
  foreign_key: :subcattit_id,
  class_name: :Post

  
end

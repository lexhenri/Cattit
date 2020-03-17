# == Schema Information
#
# Table name: subscribes
#
#  id           :bigint           not null, primary key
#  subcattit_id :bigint
#  user_id      :bigint
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Subscribe < ApplicationRecord
  belongs_to :subcattit
  belongs_to :user
end

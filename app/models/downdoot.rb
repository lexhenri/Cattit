# == Schema Information
#
# Table name: downdoots
#
#  id         :bigint           not null, primary key
#  post_id    :bigint
#  user_id    :bigint
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Downdoot < ApplicationRecord
  belongs_to :post
  belongs_to :user
end

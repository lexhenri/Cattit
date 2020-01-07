# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  parent_id  :integer
#  author_id  :integer          not null
#  post_id    :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
end

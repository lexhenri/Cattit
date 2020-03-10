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
end

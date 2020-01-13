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

require 'test_helper'

class PostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

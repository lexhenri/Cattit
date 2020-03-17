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

require 'test_helper'

class SubscribeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

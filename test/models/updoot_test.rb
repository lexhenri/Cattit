# == Schema Information
#
# Table name: updoots
#
#  id         :bigint           not null, primary key
#  post_id    :bigint
#  user_id    :bigint
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class UpdootTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

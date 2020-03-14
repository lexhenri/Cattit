# == Schema Information
#
# Table name: updoots
#
#  id              :bigint           not null, primary key
#  user_id         :integer
#  updootable_type :string
#  updootable_id   :bigint
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'test_helper'

class UpdootTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

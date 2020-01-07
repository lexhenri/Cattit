# == Schema Information
#
# Table name: feeds
#
#  id                :bigint           not null, primary key
#  user_id           :integer          not null
#  subbed_users_id   :bigint
#  subbed_cattits_id :bigint
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

require 'test_helper'

class FeedTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

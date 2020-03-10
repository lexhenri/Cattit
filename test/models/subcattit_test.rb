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
#  num_members     :string           default("0")
#  num_online      :string           default("0")
#  member_desc     :string           default("members")
#  online_desc     :string           default("online")
#

require 'test_helper'

class SubcattitTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

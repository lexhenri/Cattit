# == Schema Information
#
# Table name: subcattits
#
#  id              :bigint           not null
#  name            :string           not null, primary key
#  description     :text
#  moderator_ids   :integer          default([]), is an Array
#  subscriber_ids  :integer          default([]), is an Array
#  num_subscribers :integer          default(0)
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'test_helper'

class SubcattitTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

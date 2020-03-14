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

class Updoot < ApplicationRecord

  validates :user_id, uniqueness: { scope: [:updootable_id, :updootable_type] }

  belongs_to :updootable, polymorphic: true
  belongs_to :user

end

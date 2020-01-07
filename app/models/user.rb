# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string
#  password_digest :string           not null
#  session_token   :string           not null
#  subbed_cattits  :integer          default([]), is an Array
#  subbed_users    :integer          default([]), is an Array
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  description     :text
#

class User < ApplicationRecord

  before_validation :ensure_session_token
  attr_reader :password

  validates :username, :password_digest, :session_token, presence: true
  validates :username, :email, :password_digest, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(username, password)
    @user = User.find_by(username: username)
    return nil if !@user 
    @user.is_password?(password) ? @user : nil
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
  
end

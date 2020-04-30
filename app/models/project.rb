class Project < ApplicationRecord
  validates :title, :category, :description, :days_remaining, :funded, :user_id, presence: true

  belongs_to :user
  has_many :backers,
   through: :user,
   source: :user
  has_many :rewards,
   through: :reward,
   source: :reward


    
end
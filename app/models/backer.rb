class Backer < ApplicationRecord
  validates :project_id, :user_id, presence: true

  belongs_to :project

  
  
  
    
end
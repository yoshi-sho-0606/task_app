class Task < ApplicationRecord
  validates :name, presence: true
  validates :body, length: { maximum: 140 }
  
  enum status: { todo: 1, doing: 2, done: 3 }
end

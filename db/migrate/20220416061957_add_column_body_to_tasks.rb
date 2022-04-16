class AddColumnBodyToTasks < ActiveRecord::Migration[6.1]
  def change
    add_column :tasks, :body, :string
  end
end

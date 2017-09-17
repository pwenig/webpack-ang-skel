class CreateMountains < ActiveRecord::Migration[5.1]
  def change
    create_table :mountains do |t|
      t.string "name"
      t.string "zipcode"

      t.timestamps
    end
  end
end

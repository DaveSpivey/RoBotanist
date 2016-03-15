class Species
  include Mongoid::Document
  include Mongoid::Tree
  include Mongoid::Tree::Ordering
  field :scientific_name, type: String
  field :common_name, type: String
  field :description, type: String
  field :image_url, type: String
  belongs_to :option
end

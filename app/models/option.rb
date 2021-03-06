# This class represents each option in the dichotemous key.
#It represents the majority of the data
class Option
  include Mongoid::Document
  include Mongoid::Tree
  field :text, type: String
  field :head, type: String
  field :page, type: String
  field :key, type: String
  field :child_obj, type: Hash
  # has_many :species
  # has_many :genera, class_name: "Genus"
  # has_many :families
end


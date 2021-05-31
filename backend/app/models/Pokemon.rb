class Pokemon < ActiveRecord::Base
    def self.moves
        Pokemon.all.map{|pokemon| pokemon.moves}.join(", ").split(", ").uniq.sort
    end
end
class Team < ActiveRecord::Base
    belongs_to :trainer

    def pokemon_data
        self.team.split(", ").map{|pokemon| Pokemon.find_by(name: pokemon)}
    end
end
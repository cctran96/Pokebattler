class Trainer < ActiveRecord::Base
    has_many :teams

    def self.without_pw
        fields = (self.attribute_names - ['password']).join(', ')
        self.all.select(fields)
    end

    def self.enemy_team
        fields = (self.attribute_names - ['password']).join(', ')
        self.all.select(fields).find([1,2])
    end
end
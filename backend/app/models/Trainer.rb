class Trainer < ActiveRecord::Base
    has_many :teams

    def self.without_pw(info)
        fields = (self.attribute_names - ['password']).join(', ')
        self.all.select(fields).find_by(info)
    end
end
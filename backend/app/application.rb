class Application

  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)

    if req.path.match(/pokemon/) && req.get?
      return [200, { 'Content-Type' => 'application/json' }, [{:pokemon => Pokemon.all}.to_json]]
    elsif req.path.match(/moves/) && req.get?
      return [200, { 'Content-Type' => 'application/json' }, [{:moves => Move.all}.to_json]]
    elsif req.path.match(/teams/) && req.get?
      return [200, { 'Content-Type' => 'application/json' }, [{:teams => Team.all}.to_json]]
    elsif req.path.match(/sprites/) && req.get?
      return [200, { 'Content-Type' => 'application/json' }, [{:sprites => Sprite.all}.to_json]]
    elsif req.path.match(/login/) && req.post?
      user = JSON.parse(req.body.read)
      found = Trainer.without_pw(user)
      if found
        return [200, { 'Content-Type' => 'application/json' }, [{:trainer => found, :teams => found.teams}.to_json]]
      else
        return [200, { 'Content-Type' => 'application/json' }, [{message: "The information you have entered is incorrect."}.to_json]]
      end
    elsif req.path.match(/teams/) && req.post?
      data = JSON.parse(req.body.read)
      team = Team.create(data)
      return [200, {'Content-Type' => 'application/json' }, [{:team => team}.to_json]]
    elsif req.path.match(/teams/) && req.patch?
      id = req.path.split("/teams/").last
      team = Team.find(id)
      data = JSON.parse(req.body.read)
      team.update(data)
      return [[200, {'Content-Type' => 'application/json' }, [{:team => team}.to_json]]]
    elsif req.path.match(/teams/) && req.delete?
      id = req.path.split("/teams/").last
      Team.find(id).destroy
      return [200, {'Content-Type' => 'application/json' }, [{message: "Team deleted"}.to_json]]
    else
      resp.write "Path Not Found"
    end
    resp.finish
  end

end

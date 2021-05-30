class Application

  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)

    if req.path.match(/pokemon/) && req.get?
      return [200, { 'Content-Type' => 'application/json' }, [ {:pokemon => Pokemon.all}.to_json ]]

    else
      resp.write "Path Not Found"

    end

    resp.finish
  end

end

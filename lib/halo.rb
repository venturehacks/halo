require 'sass'
require 'halo/version'

module Halo
  if defined?(Rails) && defined?(Rails::Engine)
    class Engine < ::Rails::Engine
      config.assets.paths << File.expand_path('core', __dir__)
    end
  else
    Sass.load_paths << File.expand_path('core', __dir__)
  end

  class Sass
    def self.hi
      puts 'Hello world from Halo gem!'
    end
  end
end

# frozen_string_literal: true

require 'halo/version'

module Halo
  class Error < StandardError; end

  class Sass
    def self.hi
      puts 'Hello world from Halo gem!'
    end
  end
end

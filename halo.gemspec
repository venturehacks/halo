lib = File.expand_path('lib', __dir__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'halo/version'

Gem::Specification.new do |s|
  s.name        = 'halo'
  s.version     = Halo::VERSION
  s.authors     = ['Drew Lustro']
  s.email       = ['drew@angel.co']
  s.date        = '2018-12-11'

  s.summary     = 'The Halō Design System'
  s.description = 'Next-generation design system for Talent and beyond.'
  s.homepage    = 'https://github.com/venturehacks/halo'
  s.license     = 'UNLICENSED'
  s.platform    = Gem::Platform::RUBY

  s.files       = Dir.chdir(File.expand_path(__dir__)) do
    `git ls-files -z`.split("\x0").reject do |f|
      (f.match(/^(test|spec|features|src|\.)/) ||
        f.match(/\.(js|jsx|json|ts|tsx|mdx|md)$/))
    end
  end

  s.test_files = `git ls-files -- {test,spec,features}/*`.split("\n")
  # s.executables = `git ls-files -- bin/*`.split("\n").map { |f| File.basename(f) }
  s.require_paths = ['lib']

  s.add_development_dependency 'aruba', '~> 0.14'
  s.add_development_dependency 'bundler', '~> 1.17'
  s.add_development_dependency 'css_parser', '~> 1.6'
  s.add_development_dependency 'cucumber', '~> 3.1'
  s.add_development_dependency 'rake', '~> 12.3'
  s.add_development_dependency 'rspec', '~> 3.4'
  s.add_development_dependency 'scss_lint', '0.57'
  s.add_development_dependency 'json', '2.1'
  s.add_runtime_dependency 'sass', '~> 3.4'
  # s.add_runtime_dependency 'thor', '~> 0.20'
end

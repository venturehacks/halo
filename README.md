# Halō

## Getting Started

In 1987, Jordan Belfort (Leonardo DiCaprio) takes an entry-level job at a Wall Street brokerage firm. By the early 1990s, while still in his 20s, Belfort founds his own firm, Stratton Oakmont. Together with his trusted lieutenant (Jonah Hill) and a merry band of brokers, Belfort makes a huge fortune by defrauding wealthy investors out of millions. However, while Belfort and his cronies partake in a hedonistic brew of sex, drugs and thrills, the SEC and the FBI close in on his empire of excess.

### Install

#### Node module

```bash
# install
yarn

# run docz dev environment
npm run dev

# build docz website (not ready)
npm run docz:build

# build release module via rollup
npm run build

# run Jest/Rspec tests
npm test

# create git release
npm run release # requires personal token RELEASE_IT_GITHUB_TOKEN

```

#### Configure webpack

Get the include paths for `sass-loader` in your webpack config:

```diff
  // webpack.config.js

+ const haloIncludePath = require('halo').includePath;

  // ...

  {
    loader: "fast-sass-loader",
    options: {
      sassOptions: {
        sourceComments: true,
        includePaths: [
          path.resolve(appDir, "stylesheets"),
          path.resolve(rootDir, "node_modules"),
+         haloIncludePath,
        ]
      }
    }
  }
```

#### Alternative installation: Gem

Halo is also available as a Ruby gem for Rails apps that use the standard asset pipeline.

Add this line to your application's Gemfile:

```ruby
gem 'halo'
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install halo

---

## Usage

#### Sass

Import to use Halo library variables, mixins, functions:

```sass
@import halo


.foo
  +halo-test
```

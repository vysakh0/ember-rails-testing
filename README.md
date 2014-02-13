# Setting up ember (integration)testing in a Rails project

### Things
- [ember-rails](https://github.com/emberjs/ember-rails) gem.
- [teaspoon test runner](https://github.com/modeset/teaspoon) gem. (will use teaspoon-qunit)
- phantom js - install gem or the npm version.


## 3 minutes to setup

### Setting up ember in Rails
``` bash
rails new ember-rails-testing
cd ember-rails-testing

echo "gem 'ember-rails'" >> Gemfile
echo "gem 'ember-source', '1.3.0'" >> Gemfile

bundle

rails g ember:bootstrap -n App
rails g ember:install


rails g home index

```

`config/routes.rb`

```ruby
root "home#index"
```
`app/assets/javascripts/templates/index.hbs`
```handlebars
<h2 class="welcome"> Welcome yo! </h2>
```

Visit `localhost:3000` ! Voila :D

### Setting up teaspoon for testing

Gonna use `rspec` for other testing.

`Gemfile`
```ruby

group :development, :test do
  gem 'rspec-rails', '~> 3.0.0.beta'
  gem "teaspoon"
end
```

```bash
rails g rspec:install
rm -rf test/
rails g teaspoon:install
```

Now, you need to configure few things in teaspoon. `qunit` is my choice for js-testing.

`config/initializers/teaspoon.rb`
```ruby
    suite.javascripts = ["teaspoon-qunit"]
```

And you need to choose the driver or server. In my case i go with `phantomjs`. Also, I have it installed with npm repo or you could use a gem.

`spec/teaspoon_env.rb`
```ruby
  config.driver              = "phantomjs" # available: phantomjs, selenium
```

**Done**

### Writing integration tests

Now, you could write tests. Check `integration_spec` and helper spec in the repo. This also has `mockjax` (downloaded in vendor dir) to mock server requests. Works good yo ;)

### Using the repo

```bash
git clone ssh://git@github.com/vysakh0/ember-rails-testing.git
cd ember-rails-testing
bundle install
bundle exec teaspoon
```

### License
License under MIT License.


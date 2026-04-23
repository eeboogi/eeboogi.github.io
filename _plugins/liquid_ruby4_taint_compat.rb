# frozen_string_literal: true

# github-pages pins Liquid 4.0.3, which still calls String#tainted? (removed in Ruby 3.2+).
# Bundler cannot upgrade Liquid without dropping github-pages. This no-op keeps local Ruby 4 builds working.
require "liquid"

Liquid::Variable.class_eval do
  def taint_check(*)
    nil
  end
end

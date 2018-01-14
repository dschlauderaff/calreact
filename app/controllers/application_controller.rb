class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  # Tell rails where to find partials
  prepend_view_path Rails.root.join("frontend")
end

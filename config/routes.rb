Rails.application.routes.draw do
  resources :client_exercise_joins
  resources :appointments
  resources :exercises
  resources :review_ratings
  resources :trainers
  resources :clients
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/me", to: "users#show"
  post "/login_member", to: "sessions#create_member"
  post "/login_trainer", to: "sessions#create_trainer"
  delete "/logout_member", to: "sessions#destroy_member"
  delete "/logout_trainer", to: "sessions#destroy_trainer"


  


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

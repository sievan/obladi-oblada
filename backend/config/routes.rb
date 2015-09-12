Rails.application.routes.draw do
  resources :rentals
  resources :users
  resources :owners
  resources :rentables

  get '/auth/:provider/callback', to: 'sessions#create'
  get '/login/(:provider)', to: 'sessions#new'
  get '/sessions/verify/:token', to: 'sessions#verify'

  get '/braintree/client_token', to: 'brain_tree#client_token'
end

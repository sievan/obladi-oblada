Rails.application.routes.draw do
  resources :rentals
  resources :users
  resources :owners
  resources :rentables

  get '/auth/:provider/callback', to: 'sessions#create'
  get '/login/(:provider)', to: 'sessions#new'
  get '/sessions/verify/:token', to: 'sessions#verify'

  get '/braintree/client_token', to: 'brain_tree#client_token'

  post '/braintree/add_paytment_method', to: 'brain_tree#add_payment_method'

  get '/profile', to: 'sessions#profile'
end

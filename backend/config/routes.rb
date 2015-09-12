Rails.application.routes.draw do
  resources :rentals
  resources :users
  resources :owners
  resources :rentables

  get '/auth/:provider/callback', to: 'sessions#create'
  get '/login/(:provider)', to: 'sessions#new'
  get '/sessions/verify/:token', to: 'sessions#verify'
end

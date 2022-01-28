Rails.application.routes.draw do
  namespace :api do
    resources :tweets, only: :index
    get 'search', to: 'tweets#search'
  end
end

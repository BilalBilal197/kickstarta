Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :projects, only: [:index, :show, :create] do
      resources :backers, only: [:create]
    end
    resources :rewards, only: [:index, :create]
  end
  
  root "static_pages#root"
end

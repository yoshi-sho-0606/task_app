Rails.application.routes.draw do
  root 'home#index'

  namespace 'api' do
    namespace 'v1' do
      resources :tasks
    end
  end

  get '*path', to: 'home#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

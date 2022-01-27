class Api::TweetsController < ApplicationController
  def index
    render json: TwitterClient.home_timeline
  end
end

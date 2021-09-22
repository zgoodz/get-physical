class ReviewRatingsController < ApplicationController

    def index
        render json: Review.all
    end
    
    def create
        review = Review.create!(review_params)
        render json: review, status: :created
    end

    def destroy
        review = Review.find_by(id: params[:id])
        review.destroy
        head :no_content
    end

    private

    def review_params
        params.permit(:review, :rating, :client_id, :trainer_id)
    end
    
end

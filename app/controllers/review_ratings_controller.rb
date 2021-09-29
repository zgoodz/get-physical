class ReviewRatingsController < ApplicationController

    def index
        render json: ReviewRating.all
    end
    
    def create
        review = ReviewRating.create!(review_params)
        render json: Trainer.all, status: :created
    end

    def destroy
        review = ReviewRating.find_by(id: params[:id])
        review.destroy
        head :no_content
    end

    private

    def review_params
        params.permit(:review, :rating, :client_id, :trainer_id)
    end
    
end

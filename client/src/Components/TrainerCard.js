import { useState } from "react"

export default function TrainerCard({ trainer, member, setShowTrainers }) {
    const [addBtn, setAddBtn] = useState(false)
    const [newReview, setNewReview] = useState({
        trainer_id: trainer.id,
        client_id: member ? member.id : null,
        review: '',
        rating: null
    })

    function handleClick() {
        setAddBtn(!addBtn)
    }

    function handleChange(e) {
        setNewReview({
            ...newReview,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch('/review_ratings', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newReview)
        })
        .then(r => r.json())
        .then(data => {
            setShowTrainers(data)
            setAddBtn(false)
        })
    }

    return(
        <div>
            <h2>{trainer.name}</h2>
            <h3>Average Rating: {trainer.average_rating}</h3>
            <ul>
                {trainer.review_ratings.map(review => <li key={review.id}>{review.review}</li>)}
            </ul>
            {addBtn ? 
                <>
                <form onSubmit={handleSubmit}>
                    <label>Rating: </label>
                        <select name="rating" onChange={handleChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    <label>Review: </label>
                    <textarea rows="5" cols="50" name="review" onChange={handleChange}></textarea>
                    <button>Submit</button>
                </form>
                <button onClick={handleClick}>Cancel</button> 
                </>
                :
                <button onClick={handleClick}>Add Review</button> 
            }
            
        </div>
    )
}
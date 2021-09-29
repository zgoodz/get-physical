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
            <h3>{trainer.name}</h3>
            <ul>
                {trainer.review_ratings.map(review => <li key={review.id}>{review.review}</li>)}
            </ul>
            {addBtn ? 
                <>
                <form onSubmit={handleSubmit}>
                    <label>Rating: </label>
                    <input onChange={handleChange} name="rating"></input><br></br>
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
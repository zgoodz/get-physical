import { useState } from "react"
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'

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
        <Grid item>
            <Paper style={{ height: 350, width: 350 }}>
            <h2>{trainer.name}</h2>
            <h3>Average Rating: {trainer.average_rating}</h3>
            <ul>
                {trainer.review_ratings.map(review => <li key={review.id}>"{review.review}"</li>)}
            </ul>
            {addBtn ? 
                <>
                <form className="review-form" onSubmit={handleSubmit}>
                    <label>Rating: </label>
                        <select name="rating" onChange={handleChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <br></br>
                    <label>Review: </label>
                    <br></br>
                    <textarea rows="5" cols="25" name="review" onChange={handleChange}></textarea>
                    <br></br>
                    <button>Submit</button>
                    <br></br>
                    <button onClick={handleClick}>Cancel</button>
                </form>
                
                </>
                :
                <button onClick={handleClick}>Add Review</button> 
            }
            </Paper>
        </Grid>
    )
}
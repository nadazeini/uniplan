import 'bootstrap/dist/css/bootstrap.min.css';
import './editReview.css';

import React, { Component } from 'react'
import StarRatingComponent from 'react-star-rating-component';

class EditReview extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            reviews: '',
            difficulty: 1,
            teachingAbility: 4,
            lectureClarity: 4,
            examDifficulty: 4,
            homeworkLoad: 4,
        }
    }
    
    handleReviewsChange = event => {
        this.setState({
            reviews: event.target.value
        })
    }

    setDiffculty(value) {
        this.setState({
            difficulty: value
        })
    }

    setTeachingAbility(value){
        this.setState({
            teachingAbility: value
        })
    }

    setLectureClarity(value) {
        this.setState({
            lectureClarity: value
        })
    }

    setExamDifficulty(value) {
        this.setState({
            examDifficulty: value
        })
    }

    setHomeworkLoad(value) {
        this.setState({
            homeworkLoad: value
        })
    }


    handleSubmit = event => {
        alert(`${"Review: "+this.state.reviews } 
                ${"\nDifficulty: "+ this.state.difficulty} 
                ${"\nTeaching Ability: "+ this.state.teachingAbility}
                ${"\nLecture Clarity: "+ this.state.lectureClarity}
                ${"\nExam Difficulty: "+ this.state.examDifficulty}
                ${"\nHomework Load: "+ this.state.homeworkLoad}`)
        event.preventDefault()
    }

    render() {
            const {reviews, difficulty, teachingAbility, lectureClarity, examDifficulty, homeworkLoad, rating} = this.state

        return (
            // <form onSubmit={this.handleSubmit}>
                    

            // </form>
        <div class="container-md">
            <form onSubmit={this.handleSubmit}>
                <div class="star-size">
                    <label class="form-label">Difficulty</label>
                    <div>
                        <StarRatingComponent
                        name="difficulty" 
                        starCount={5}
                        value={difficulty}
                        onStarClick={value => {
                            this.setDiffculty(value);
                        }} />
                    </div>
                </div>
                <div class="star-size">
                    <label class="form-label">Teaching Ability</label>
                    <div>
                        <StarRatingComponent
                        name="ability" 
                        starCount={5}
                        value={teachingAbility}
                        onStarClick={value => {
                            this.setTeachingAbility(value);
                        }} />
                    </div>
                </div>
                <div class="star-size">
                    <label class="form-label">Lecture Clarity</label>
                    <div>
                        <StarRatingComponent
                        name="ability" 
                        starCount={5}
                        value={lectureClarity}
                        onStarClick={value => {
                            this.setLectureClarity(value);
                        }} />
                    </div>
                </div>
                <div class="star-size">
                    <label class="form-label">Exam Difficulty</label>
                    <div>
                        <StarRatingComponent
                        name="examDifficulty" 
                        starCount={5}
                        value={examDifficulty}
                        onStarClick={value => {
                            this.setExamDifficulty(value);
                        }} />
                    </div>
                </div>
                <div class="star-size">
                    <label class="form-label">Homework Load</label>
                    <div>
                        <StarRatingComponent
                        name="homeworkLoad" 
                        starCount={5}
                        value={homeworkLoad}
                        onStarClick={value => {
                            this.setHomeworkLoad(value);
                        }} />
                    </div>
                </div>
                <div class="">
                    <label class="form-label star-size">Reviews</label>  
                    <textarea class="form-control"
                        value={reviews} 
                        onChange={this.handleReviewsChange}>
                    </textarea>
                </div>
                <br />
                <button type="submit" class="btn btn-success">Submit</button>
            </form>
        </div>
        )
    }
}

export default EditReview

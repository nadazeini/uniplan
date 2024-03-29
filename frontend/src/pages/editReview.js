import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/editReview.css";
import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";

const updateTeacher = (input) => {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: input }),
  };
  fetch("http://localhost:5000/add-rating/", requestOptions).then((res) =>
    res.json()
  );
};

const updateReview = (input) => {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  };
  fetch("http://localhost:5000/add-review/", requestOptions)
    .then((res) =>
      res.json()
    );
};

class EditReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teacherName: "",
      difficulty: 3,
      teachingAbility: 3,
      lectureClarity: 3,
      examDifficulty: 3,
      homeworkLoad: 3,
      review: "",
    };
  }

  handleReviewChange = (event) => {
    this.setState({
      review: event.target.value,
    });
  };

  setDiffculty(value) {
    this.setState({
      difficulty: value,
    });
  }

  setTeachingAbility(value) {
    this.setState({
      teachingAbility: value,
    });
  }

  setLectureClarity(value) {
    this.setState({
      lectureClarity: value,
    });
  }

  setExamDifficulty(value) {
    this.setState({
      examDifficulty: value,
    });
  }

  setHomeworkLoad(value) {
    this.setState({
      homeworkLoad: value,
    });
  }

  setTeacherName(value) {
    this.setState({
      teacherName: value,
    });
  }

  handleSubmit = (event) => {
    var content = {
      "teacherName": this.state.teacherName,
      "difficulty": this.state.difficulty,
      "teachingAbility": this.state.teachingAbility,
      "lectureClarity": this.state.lectureClarity,
      "examDifficulty": this.state.examDifficulty,
      "homeworkLoad": this.state.homeworkLoad,
      "teacherName": this.state.teacherName,
      "review": this.state.review,
    }

    updateReview(content);

    alert(`${"Teacher Name: " + this.state.teacherName}
                ${"\nDifficulty: " + this.state.difficulty} 
                ${"\nTeaching Ability: " + this.state.teachingAbility}
                ${"\nLecture Clarity: " + this.state.lectureClarity}
                ${"\nExam Difficulty: " + this.state.examDifficulty}
                ${"\nHomework Load: " + this.state.homeworkLoad}
                ${"\nReview: " + this.state.review}`);
    
    
    event.preventDefault();
  };

  render() {
    const {
      review,
      difficulty,
      teachingAbility,
      lectureClarity,
      examDifficulty,
      homeworkLoad,
      rating,
    } = this.state;

    return (
      // <form onSubmit={this.handleSubmit}>

      // </form>
      <div class="container-md">
        <form onSubmit={this.handleSubmit}>
          <div className="teachername">
            <label class="form-label">
              Name of professor you are leaving a review for:
            </label>
            <div>
              <input
                placeholder="Professor Name"
                onChange={(e) => this.setTeacherName(e.target.value)}
                required
              />
            </div>{" "}
            <br></br>
          </div>
          <div class="star-size">
            <label class="form-label">Difficulty</label>
            <div>
              <StarRatingComponent
                name="difficulty"
                starCount={5}
                value={difficulty}
                onStarClick={(value) => {
                  this.setDiffculty(value);
                }}
              />
            </div>
          </div>
          <div class="star-size">
            <label class="form-label">Teaching Ability</label>
            <div>
              <StarRatingComponent
                name="ability"
                starCount={5}
                value={teachingAbility}
                onStarClick={(value) => {
                  this.setTeachingAbility(value);
                }}
              />
            </div>
          </div>
          <div class="star-size">
            <label class="form-label">Lecture Clarity</label>
            <div>
              <StarRatingComponent
                name="ability"
                starCount={5}
                value={lectureClarity}
                onStarClick={(value) => {
                  this.setLectureClarity(value);
                }}
              />
            </div>
          </div>
          <div class="star-size">
            <label class="form-label">Exam Difficulty</label>
            <div>
              <StarRatingComponent
                name="examDifficulty"
                starCount={5}
                value={examDifficulty}
                onStarClick={(value) => {
                  this.setExamDifficulty(value);
                }}
              />
            </div>
          </div>
          <div class="star-size">
            <label class="form-label">Homework Load</label>
            <div>
              <StarRatingComponent
                name="homeworkLoad"
                starCount={5}
                value={homeworkLoad}
                onStarClick={(value) => {
                  this.setHomeworkLoad(value);
                }}
              />
            </div>
          </div>
          <div class="">
            <label class="form-label star-size">Review</label>
            <textarea
              class="form-control"
              value={review}
              onChange={this.handleReviewChange}
            ></textarea>
          </div>
          <br />
          <button type="submit" class="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default EditReview;

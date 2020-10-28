import React from 'react';

import BackButton from '../BackButton';

import { Button, ListGroupItem, Card, CardTitle, CardText, CardSubtitle, CardBody, CardHeader, CardFooter } from 'reactstrap';

import { MdWatchLater } from "react-icons/md";

import { connect } from 'react-redux';
import { showEditWorkout, showEditWorkoutExercise } from '../../../redux/actions/displayActions.js';

class WorkoutDetails extends React.Component {
  constructor(props) {
    super(props);
    this.showEditWorkout = this.showEditWorkoutModal.bind(this);
    this.showEditWorkoutExercise = this.showEditWorkoutExercise.bind(this);
  }

  showEditWorkout(e) {
    this.props.showEditWorkout(this.props.workout._id);
  }

  showEditWorkoutExercise(e) {
    
  }

  render() {
    return (
      <div>
        <BackButton backToDashboard={this.props.backToDashboard} />
        
        <ListGroupItem className="bg-light d-flex justify-content-between">
          <div>
            <div className="fs-large">{this.props.workout.name}</div>
            <div>Type: <span className="text-primary">{this.props.workout.type}</span></div>
            <div className="d-flex align-items-center"><MdWatchLater className="mr-1" /> <span className="text-primary">{this.props.workout.duration} mins</span></div>
          </div>
          <Button className="details-edit-button" color="primary" onClick={this.showEditWorkout}>Edit</Button>
        </ListGroupItem>
        <div className="row row-cols-1 row-cols-md-3 mt-4">
        {
          this.props.workout.exercises.map(exercise => {
            return (
              <div className="col mb-4">
                <Card className="card h-100">
                  <CardHeader>
                    <CardTitle className="d-flex justify-content-between">
                      <div className="fs-large">{exercise.exercise.name}</div>
                      <div className="text-primary">{exercise.exercise.muscleGroup}</div>
                    </CardTitle>
                  </CardHeader>
                  <CardBody>
                    <CardSubtitle className="mb-3">
                      <span className="mr-3">Reps: <span className="text-primary">{exercise.reps}</span></span>
                      <span>Sets: <span className="text-primary">{exercise.sets}</span></span>
                      <div>Weight: <span className="text-primary">{exercise.weight}</span></div>
                    </CardSubtitle>
                    <CardText className="text-muted">{exercise.exercise.description}</CardText>
                  </CardBody>
                  <CardFooter>
                    <Button
                      className="float-right"
                      color="primary"
                      onClick={() => {
                        this.props.showEditWorkoutExercise({
                          workoutId: this.props.workout._id,
                          workoutExerciseId: exercise._id
                        })
                      }}>Edit</Button>
                  </CardFooter>
                </Card>
              </div>
            )
          })
        }
        </div>
      </div>
    )
  }
};

const mapStateToProps = state => {};

export default connect(mapStateToProps, { showEditWorkout, showEditWorkoutExercise })(WorkoutDetails);
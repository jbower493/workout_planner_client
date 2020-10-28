import React from 'react';

import {
  Button
} from 'reactstrap';

import { connect } from 'react-redux';
import { showModalNew, displayWorkouts, displayExercises } from '../../redux/actions/displayActions';

const AddButtons = (props) => {
  return (
    <div className="button-holder mb-4 d-flex justify-content-between align-items-end">
      <div className="new-buttons">
        <Button color="primary" className="mr-3 top-new-button" onClick={() => props.showModalNew('new exercise')} >New Exercise</Button>
        <Button color="primary" onClick={() => props.showModalNew('new workout')} >New Workout</Button>
      </div>
      <div className="toggle-lists">
        <span
          className={props.active === 'workouts' ? 'text-primary ml-3' : 'text-body ml-3'}
          onClick={() => props.displayWorkouts()}>Workout List</span>
        <span> / </span>
        <span
          className={props.active === 'exercises' ? 'text-primary' : 'text-body'}
          onClick={props.displayExercises}>Exercise List</span>
      </div>
    </div>
  )
};

const mapStateToProps = state => ({
  active: state.display.view
});

export default connect(mapStateToProps, { showModalNew, displayWorkouts, displayExercises })(AddButtons);